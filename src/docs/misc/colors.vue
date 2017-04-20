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
      const assetColors = []
      const darkerColors = []
      const darkestColors = []
      let colors = colorVars.global.$colors.value
      let colorsBase = colors.base.value
      let colorsMessage = colorVars.global['$message-colors'].value
      let colorsText = colorVars.global['$text-colors'].value
      let colorsAsset = colorVars.global['$asset-colors'].value

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

      for (let name in colorsAsset) {
        assetColors.push({
          name: name,
          hex: colorsAsset[name].value.color.value.hex,
          icon: colorsAsset[name].value.icon.value
        })
      }

      return {
        baseColors,
        messageColors,
        textColors,
        assetColors,
        darkerPercent,
        darkestPercent,
        darkerColors,
        darkestColors
      }
    },
    methods: {
      icon (color) {
        var icon = document.createElement('i')
        icon.classList.add('fa')
        icon.classList.add(color.icon)
        icon.style.color = color.hex
        icon.innerHTML = '&nbsp;'
        return icon.outerHTML
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/_partials.scss';

  #content-colors {
    .colors {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        flex: 0 1 175px;
        display: flex;
        flex-direction: column;
        border: solid 1px $border-color;
        margin: 0 $spacing-half $spacing-half 0;

        &:last-child {
          margin: 0 0 $spacing-half 0;
        }

        .color {
          height: 75px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 50px;
          text-align: center;
          border-top: solid 1px $border-color;
          padding: $spacing-half;

          .icon {
            font-size: 24px;
            margin: 0 0 $spacing-half 0;
          }
          .fa {
            font-weight: bold;
          }
          .name {
            font-weight: bold;
          }
          .hex {
            font-size: $font-size;
          }
        }
      }
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

          <h4>Base</h4>
          <div class="colors">
            <div class="item" v-for="color in baseColors">
              <div class="color" :style="{'background-color': color.value}"></div>
              <div class="text">
                <div class="name">${{color.name}}-color</div>
                <div class="hex">{{color.value}}</div>
              </div>
            </div>
          </div>

          <h4>Text</h4>
          <div class="colors">
            <div class="item" v-for="color in textColors">
              <div class="color" :style="{'background-color': color.value}"></div>
              <div class="text">
                <div class="name">${{color.name}}-color</div>
                <div class="hex">{{color.value}}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="widget">
        <header><h2>Notice Colors</h2></header>
        <div class="body">
          <p>The message color palette is used in the slide-out messaging bar.</p>

          <div class="colors">
            <div class="item" v-for="color in messageColors">
              <div class="color" :style="{'background-color': color.value}"></div>
              <div class="text">
                <div class="name">${{color.name}}-color</div>
                <div class="hex">{{color.value}}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="widget">
        <header><h2>Asset Colors</h2></header>
        <div class="body">
          <p>Assets are assigned a color (and icon) which is used to highlight and visually communicate that assets parent definition.</p>

          <div class="colors">
            <div class="item" v-for="color in assetColors">
              <div class="color" :style="{'background-color': color.hex}"></div>
              <div class="text">
                <div class="icon" v-html="icon(color)"></div>
                <div class="fa">{{color.icon}}</div>
                <div class="name">${{color.name}}-color</div>
                <div class="hex">{{color.hex}}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </article>
</template>
