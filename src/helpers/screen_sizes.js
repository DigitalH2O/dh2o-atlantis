import screenVars from '!!sass-extract-loader!src/scss/misc/_screen_sizes.scss' // eslint-disable-line

export default {
  small: screenVars.global['$media-small'].value,
  medium: screenVars.global['$media-medium'].value,
  large: screenVars.global['$media-large'].value
}
