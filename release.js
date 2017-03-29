var dh2oRelease = require('dh2o-release')
var cmd = require('node-cmd-promise')

dh2oRelease({
  buildStep () {
    return cmd('npm run dist')
    .then(() => {
      return cmd('dist:docs')
    })
  }
})
