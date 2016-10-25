<script>
  import tinycolor from 'tinycolor2';
  import _ from 'lodash';

  import styleVars from 'dh2o-atlantis/scss/shared.json';

  export default {
    data() {
      const darkerPercent = styleVars['darker-amount'] * 100;
      const darkestPercent = styleVars['darkest-amount'] * 100;

      const darkerColors = _(styleVars.colors.base)
      .map((color, colorName) =>
        [colorName, tinycolor(color).darken(darkerPercent).toString()]
      )
      .fromPairs()
      .value();

      const darkestColors = _(styleVars.colors.base)
      .map((color, colorName) =>
        [colorName, tinycolor(color).darken(darkestPercent).toString()]
      )
      .fromPairs()
      .value();


      return {
        colors: styleVars.colors,
        darkerPercent,
        darkestPercent,
        darkerColors,
        darkestColors
      };
    }
  };
</script>

<style scoped>
  @import '~dh2o-atlantis/scss/index.scss';

  .row.base {
    margin-bottom: 20px;
  }

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
        The base color palette below is the default for most cases. When we
        need contrast, use the <code class="language-markup">darker</code> and
        <code class="language-markup">darkest</code> functions to get variations
        on the original colors.
      </p>

      <div class="row base">
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
          <h2>Darker Colors ({{darkerPercent}}%)</h2>
          <ul class="colors">
            <li v-for="(color, colorName) in darkerColors"
                :style="{ 'background-color': color, 'color': '#ffffff' }">
              darker(${{colorName}})
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-lg-4">
          <h2>Darkest Colors ({{darkestPercent}}%)</h2>
          <ul class="colors">
            <li v-for="(color, colorName) in darkestColors"
                :style="{ 'background-color': color, 'color': '#ffffff' }">
              darkest(${{colorName}})
            </li>
          </ul>
        </div>
      </div>

      <p>The message color palette is used in the slide-out messaging bar.</p>

      <div class="row">
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
