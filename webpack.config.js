// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//   devtool: 'eval',
//   entry: [
//     'webpack-dev-server/client?http://localhost:8080',
//     'webpack/hot/dev-server',
//     './src/index'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'main.js'
//   },
//   resolve: {
//     root: path.resolve('./src'),
//     extensions: ['', '.js']
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   devServer: {
//     contentBase: 'examples',
//     inline: true,
//     hot: true,
//     open: true
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: '/node_modules/',
//         query: {
//           presets: [
//             require.resolve('babel-preset-es2015'),
//             require.resolve('babel-preset-stage-2'),
//           ],
//         },
//       },
//       { test: /\.scss$/, loader: "style!css?sourceMap!sass?sourceMap" },
//     ],
//   },
// };





var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.scss$/, loader: "style!css?sourceMap!sass?sourceMap" },
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
    ,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
