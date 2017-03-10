var projectRoot = process.cwd()
var path = require('path')

// Overriding default base webpack config
var config = {
  entry: {index: './docs.js'},
  resolve: {
    // Aliases - Used for pointing to reusable parts of your app
    alias: {
      'dh2o-atlantis': projectRoot + '/src',
      'dh2o-atlantis-partials': projectRoot + '/src/scss/_partials.scss'
    }
  }
}

if (process.env.DOCS) {
  config.output = {
    path: path.resolve(projectRoot, 'docs'),
    filename: '[name].js',
    publicPath: '/'
  }
} else if (process.env.ENVIRONMENT === 'production') {
  config.entry.index = './index.js'
  config.output = { library: 'styleguide', libraryTarget: 'umd' }
}

module.exports = config
