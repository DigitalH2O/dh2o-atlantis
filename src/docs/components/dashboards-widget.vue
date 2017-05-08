<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      className () {
        return `dh2o-icon-${this.type}`
      }
    }
  }
</script>

<style lang="scss">
  @import '~dh2o-atlantis/scss/_partials.scss';

  .dashboard-widget {
    header {
      .title { text-transform: capitalize; }
      .subtitle { text-transform: capitalize; }
    }
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      i {
        font-size: 40px;
      }
      .text {
        padding: 10px 0 0 0;
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
      }
    }
  }
</style>

<template>
  <div class="dashboard-widget widget">
    <header>
      <div class="titlebar">
        <span class="title">{{type}}</span>
        <span class="subtitle">{{type}} text</span>
      </div>
      <div class="toolbar">
        <div class="other-menu"><i class="fa fa-pencil"></i></div>
        <div class="dh2o-dropdown-container trigger">
          <div class="dh2o-dropdown-trigger"><i aria-hidden="true" class="fa fa-bars"></i></div>
          <div class="dh2o-dropdown-content">
            <ul class="menu">
              <li>Menu item</li>
              <li>Menu item 2</li>
              <li>Menu item 3</li>
              <li>Menu item 4</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="body">
      <i :class="className"></i>
      <div class="text">{{type}}</div>
    </div>
  </div>
</template>
