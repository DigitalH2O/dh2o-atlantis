<script>
  import tinycolor from 'tinycolor2'
  import _ from 'lodash'
  import colorVars from '!!get-sass-vars-loader!../../../src/scss/misc/_colors.scss'

  export default {
    data () {
      const darkerPercent = colorVars['$darker-percent']
      const darkestPercent = colorVars['$darkest-percent']
      let colors = colorVars.$colors

      const darkerColors = _(colors.base)
      .map((color, colorName) =>
        [colorName, tinycolor(color).darken(darkerPercent.replace(/%/i, '')).toString()]
      )
      .fromPairs()
      .value()

      const darkestColors = _(colors.base)
      .map((color, colorName) =>
        [colorName, tinycolor(color).darken(darkestPercent.replace(/%/i, '')).toString()]
      )
      .fromPairs()
      .value()

      return {
        colors: colors,
        darkerPercent,
        darkestPercent,
        darkerColors,
        darkestColors
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/_partials.scss';

  .colors-group {
    display: flex;
    flex-direction: row;

    div {
      flex: 0 1 33%;
      margin: 0 $spacing-quarter 0 $spacing-quarter;
      &:first-child, &:last-child { margin: 0;}
    }

    .colors li {
      display: block;
      text-transform: none;
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

      <div class="colors-group">
        <div>
          <h2>Base Colors</h2>
          <ul class="colors">
            <li class="btn" v-for="(color, colorName) in colors.base"
                :style="{'background-color': color, 'color': '#ffffff'}">
              ${{colorName}}: {{color}}
            </li>
          </ul>
        </div>

        <div>
          <h2>Darker Colors ({{darkerPercent}})</h2>
          <ul class="colors">
            <li class="btn" v-for="(color, colorName) in darkerColors"
                :style="{ 'background-color': color, 'color': '#ffffff' }">
              darker(${{colorName}})
            </li>
          </ul>
        </div>

        <div>
          <h2>Darkest Colors ({{darkestPercent}})</h2>
          <ul class="colors">
            <li class="btn" v-for="(color, colorName) in darkestColors"
                :style="{ 'background-color': color, 'color': '#ffffff' }">
              darkest(${{colorName}})
            </li>
          </ul>
        </div>
      </div>

      <div class="separator"></div>

      <p>The message color palette is used in the slide-out messaging bar.</p>
      <div class="colors-group">
        <div>
          <h2>Message Colors</h2>
          <ul class="colors">
            <li class="btn" v-for="(color, colorName) in colors.message"
                :style="{'background-color': color, 'color': '#ffffff'}">
              ${{colorName}}: {{color}}
            </li>
          </ul>
        </div>
      </div>

      <div class="separator"></div>

      <p>Text Link Color is used to highlight text based links and focus values on fields</p>

      <div class="row">
        <div class="col-xs-6 col-lg-4">
          <h2>Text Link Color</h2>
          <ul class="colors">
            <li class="btn" v-for="(color, colorName) in colors.text"
                :style="{'background-color': color, 'color': '#ffffff'}">
              ${{colorName}}: {{color}}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>

</template>
