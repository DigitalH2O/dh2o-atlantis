<script>
  import tinycolor from 'tinycolor2'
  import colorVars from '!!sass-extract-loader!../../../src/scss/misc/_colors.scss'

  export default {
    data () {
      const darkerPercent = colorVars.global['$darker-percent'].value
      const darkestPercent = colorVars.global['$darkest-percent'].value
      const baseColors = []
      const messageColors = []
      const textColors = []
      const darkerColors = []
      const darkestColors = []
      let colors = colorVars.global.$colors.value
      let colorsBase = colors.base.value
      let colorsMessage = colorVars.global['$message-colors'].value
      let colorsText = colorVars.global['$text-colors'].value

      for (let name in colorsBase) {
        baseColors.push({name: name, value: colorsBase[name].value.hex})
        darkerColors.push({name: name, value: tinycolor(colorsBase[name].value.hex).darken(darkerPercent).toString()})
        darkestColors.push({name: name, value: tinycolor(colorsBase[name].value.hex).darken(darkerPercent).toString()})
      }

      for (let name in colorsMessage) {
        messageColors.push({name: name, value: colorsMessage[name].value.hex})
      }

      for (let name in colorsText) {
        textColors.push({name: name, value: colorsText[name].value.hex})
      }

      return {
        baseColors,
        messageColors,
        textColors,
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

    header {
      display: block;
    }

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
  <article id="content-colors">
    <header><h1>Colors</h1></header>
    <div class="stage">

      <div class="widget">
        <header><h2>Base Colors</h2></header>
        <div class="body">
          <p>
            The base color palette below is the default for most cases. When we
            need contrast, use the <code class="language-markup">darker</code> and
            <code class="language-markup">darkest</code> functions to get variations
            on the original colors.
          </p>
          <div class="colors-group">
            <div>
              <ul class="colors">
                <li class="btn" v-for="color in baseColors"
                    :style="{'background-color': color.value, 'color': '#ffffff'}">
                  ${{color.name}}: {{color.value}}
                </li>
              </ul>
            </div>

            <div>
              <ul class="colors">
                <li class="btn" v-for="color in darkerColors"
                    :style="{ 'background-color': color.value, 'color': '#ffffff' }">
                  darker(${{color.name}})
                </li>
              </ul>
            </div>

            <div>
              <ul class="colors">
                <li class="btn" v-for="(color, colorName) in darkestColors"
                    :style="{ 'background-color': color.value, 'color': '#ffffff' }">
                  darkest(${{color.name}})
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="widget">
        <header><h2>Notice Colors</h2></header>
        <div class="body">
          <p>The message color palette is used in the slide-out messaging bar.</p>
          <div class="colors-group">
            <div>
              <ul class="colors">
                <li class="btn" v-for="color in messageColors"
                    :style="{'background-color': color.value, 'color': '#ffffff'}">
                  ${{color.name}}: {{color.value}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="widget">
        <header><h2>Text Link Color</h2></header>
        <div class="body">
          <p>Text Link Color is used to highlight text based links and focus values on fields</p>
          <div class="row">
            <div class="col-xs-6 col-lg-4">
              <ul class="colors">
                <li class="btn" v-for="color in textColors"
                    :style="{'background-color': color.value, 'color': '#ffffff'}">
                  ${{color.name}}: {{color.value}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

  </article>
</template>
