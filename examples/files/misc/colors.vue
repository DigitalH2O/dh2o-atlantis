<script>
  export default {
    data() {
      return {
        colors: require('dh2o-atlantis/src/scss/shared.json').colors
      };
    }
  };
</script>

<style scoped>
  @import '~dh2o-atlantis/src/scss/index.scss';

  ul.colors {
    li {
      @extend .btn;

      display: block;
    }
  }
</style>

<template>
  <div id="content-colors" class="section">
    <div class="title"><h1>Colors</h1></div>
    <div class="content">
      <p>
        Colors primarily consist of our blue and darker blue.
      </p>
      <p>
        We use a standard white and black and apply opacity to give
        an impression of a variations of those colors. This is to
        keep our color palette small.
      </p>
      <p>
        Their are a few misc colors that help fill the gaps of subtle
        elements of our applications.
      </p>

      <div class="row">
        <div class="col-xs-6 col-lg-4">
          <h2>Base Colors</h2>
          <ul class="colors">
            <li v-for="(color, colorName) in colors.base"
                :style="{'background-color': color, 'color': '#ffffff'}">
              ${{colorName}}: {{color}}
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-lg-4">
          <h2>Message Colors</h2>
          <ul class="colors">
            <li v-for="(color, colorName) in colors.message"
                :style="{'background-color': color, 'color': '#ffffff'}">
              ${{colorName}}: {{color}}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>

</template>
