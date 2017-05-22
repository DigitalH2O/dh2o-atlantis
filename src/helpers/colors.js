import tinycolor from 'tinycolor2'
import colorVars from '!!sass-extract-loader!src/scss/misc/_colors.scss'

const darkerPercent = colorVars.global['$darker-percent'].value
const darkestPercent = colorVars.global['$darkest-percent'].value

const baseColors = {}
const messageColors = {}
const textColors = {}
const assetColors = {}

const sassColorsBase = colorVars.global.$colors.value.base.value
const sassColorsMessage = colorVars.global['$message-colors'].value
const sassColorsText = colorVars.global['$text-colors'].value
const sassColorsAsset = colorVars.global['$asset-colors'].value

for (let name in sassColorsBase) {
  baseColors[name] = {
    original: sassColorsBase[name].value.hex,
    darker: tinycolor(sassColorsBase[name].value.hex).darken(darkerPercent).toString(),
    darkest: tinycolor(sassColorsBase[name].value.hex).darken(darkestPercent).toString()
  }
}

for (let name in sassColorsMessage) {
  messageColors[name] = sassColorsMessage[name].value.hex
}

for (let name in sassColorsText) {
  textColors[name] = sassColorsText[name].value.hex
}

for (let name in sassColorsAsset) {
  assetColors[name] = {
    hex: sassColorsAsset[name].value.color.value.hex,
    icon: sassColorsAsset[name].value.icon.value
  }
}

export default {
  baseColors,
  messageColors,
  textColors,
  assetColors,
  darkerPercent,
  darkestPercent
}
