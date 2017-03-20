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
    padding: $spacing-half;
    border: solid 1px $border-color;
    text-align: center;
    background-color: $white;

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
</style>

<template>
  <div class="dashboard-widget">
    <i :class="className"></i>
    <div class="text">{{type}}</div>
  </div>
</template>
