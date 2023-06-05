const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'none',
  // devtool: false,
  entry: {
    // main: path.resolve(__dirname, './index.js'),
    // main1: path.resolve(__dirname, './main1.js'),
    main2: path.resolve(__dirname, './main2.js'),
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[contenthash:8].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimization: {
    // minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 2,
      maxAsyncRequests: 1,
      automaticNameDelimiter: '~',
      minSize: 1,
      maxSize: 0,
      minChunks: 1,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          maxInitialRequests: 100,
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
          automaticNameDelimiter:'k'
        },
      },
    },
  },
  module: {
    // rules: [
    //   {
    //     test: /\.vue$/,
    //     exclude: /node_modules/,
    //     use: ['vue-loader'],
    //   },
    //   {
    //     test: /\.css$/,
    //     exclude: /node_modules/,
    //     use: ['style-loader', 'css-loader'],
    //   },
    //   {
    //     test: /\.s[ac]ss$/,
    //     exclude: /node_modules/,
    //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    //   },
    // ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      title: 'webpack 中使用vue',
    }),
    // new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
    host: '127.0.0.1',
    hot: true,
  },
};
