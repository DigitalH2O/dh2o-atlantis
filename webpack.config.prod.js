var path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/components/dropdowns/dropdowns.js'),
    path.resolve(__dirname, 'src/components/modals/modals.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
