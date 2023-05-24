const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(commonConfig, {
  /** @type {import('webpack').Configuration} */
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        linkType: false,
      }),
      new CleanWebpackPlugin(),
    ],
  },
});
