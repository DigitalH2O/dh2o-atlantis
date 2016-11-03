<script>
</script>

<style scoped>
  @import '~dh2o-atlantis-partials';

  ul.dropdown-menu {
    border: 1px solid $border-color;
    overflow-x: hidden;
    overflow-y: auto;

    li {
      padding: $spacing-quarter $spacing-half;
      text-align: left;
      cursor: pointer;
      color: $font-color;

      &:hover, &.selected {
        background-color: $primary;
        color: $white;
      }

      &.selected {
        font-weight: $font-weight-bold;
      }
    }
  }
</style>

<template>
  <section id="content-menus" class="section">
    <div class="title"><h1>Menus</h1></div>
    <div class="content">
      <code-sample>
        <ul class="dropdown-menu">
          <li>Option 1</li>
          <li class="selected">Option 2 (selected)</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </code-sample>
    </div>
  </section>
</template>
