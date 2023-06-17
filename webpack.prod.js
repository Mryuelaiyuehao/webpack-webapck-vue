const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    index: path.resolve(__dirname, "./preview/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:8].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 3,
      maxAsyncRequests: 5,
      minSize: 30000,
      maxSize: 0,
      name: true,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        vendors_vue: {
          test: /[\\/]node_modules[\\/](vue)[\\/]/,
          priority: -5,
          name: "vendors_vue",
        },
        "vendors_vue-router": {
          test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
          priority: -5,
          name: "vendors_vue-router",
        },
        default: {
          minChunks: 2,
          priority: -20,
        },
        default_style: {
          test: /[\\/]src[\\/]assets[\\/]style/,
          priority: -20,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "~@/assets/css/variables.scss";`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      linkType: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
      title: "Vue 组件",
      favicon: path.resolve(__dirname, "./preview/statics/img/favicon.ico"),
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
};
