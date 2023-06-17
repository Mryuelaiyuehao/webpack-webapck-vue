const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    index: path.resolve(__dirname, "./preview/index.js"),
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[hash:8].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    // minimize: false, // 是否启动代码压缩
    // runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "all",
    //   maxAsyncRequests: 5, // 用于设置单个Async Chunk 最大并行请求数，默认为 5
    //   maxInitialRequests: 3, // 用于设置入口 Chunk 最大并行请求数，默认为 3
    //   automaticNameDelimiter: "~", // 分割符
    //   minSize: 30000, // 超过minSize开始分割代码，单位：字节，默认：30000，
    //   maxSize: 0, // 分割后超过maxSize大小再分割，单位：字节，默认：0（表示不限制）
    //   minChunks: 1, // 最小引用次数，默认为1
    //   name: true,
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       priority: -10,
    //     },
    //     "vendors_vue-router": {
    //       test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
    //       name: "vendors_vue-router",
    //       priority: -5,
    //     },
    //     vendors_vue: {
    //       test: /[\\/]node_modules[\\/](vue)[\\/]/,
    //       name: "vendors_vue",
    //       priority: -5,
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true,
    //     },
    //     default_icon: {
    //       test: /[\\/]src[\\/]assets[\\/]font/,
    //       priority: -20,
    //       reuseExistingChunk: true,
    //       enforce: true,
    //     },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
      title: "webpack 中使用vue",
      favicon: path.resolve(__dirname, "./preview/statics/img/favicon.ico"),
    }),
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    // }),
  ],
  devServer: {
    host: "127.0.0.1",
    hot: true,
    open: false,
    port: 8899,
  },
};
