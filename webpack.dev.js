const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
module.exports = merge(commonConfig, {
  /** @type {import('webpack').Configuration} */
  mode: 'development',
  devtool: false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    host: '127.0.0.1',
    hot: true,
  },
});
