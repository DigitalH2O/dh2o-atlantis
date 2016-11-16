var path = require('path')
const webpack = require('webpack')

var port = process.env.npm_config_port || 8080

module.exports = {
  entry: path.resolve(__dirname, 'examples/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:' + port + '/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      }
    ]
  },
  resolve: {
    alias: {
      'dh2o-atlantis': path.resolve('./src'),
      'dh2o-atlantis-partials': path.resolve('./src/scss/_partials.scss')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: port
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
