const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      title: 'webpack 中使用vue',
    }),
    new VueLoaderPlugin(),
  ],
};
