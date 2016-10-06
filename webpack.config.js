var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: 'examples',
    inline: true,
    hot: true,
    open: true,
    stats: { colors: true }
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
      { test: /\.scss$/, loader: "style!css!sass" },
    ],
  },
};
