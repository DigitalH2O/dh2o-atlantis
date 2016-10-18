var path = require('path');
const webpack = require('webpack');

var port = process.env.npm_config_port || 8080;
const SASS_JSON_VARS_PATH = 'src/scss/shared.json';
const SASS_LOADER_CONFIG = `style!css?sourceMap!sass?sourceMap!jsontosass?path=${SASS_JSON_VARS_PATH}`;

module.exports = {
  entry: path.resolve(__dirname, 'examples/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          loaders: {
            css: SASS_LOADER_CONFIG
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.scss$/,
        loader: SASS_LOADER_CONFIG,
      },
    ]
  },
  resolve: {
    alias: { 'dh2o-atlantis': path.resolve('./src') }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: port
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
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
    }),
  ]);
}
