var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/dist',
    filename: 'main.js'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: [],
  devServer: {
    contentBase: 'examples',
    hot: true,
    open: true,
    quiet: true,
    staticOptions: {

    }
  },
  sassLoader: {
    includePaths: ['src/scss']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-2'),
          ],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ],
  },
};
