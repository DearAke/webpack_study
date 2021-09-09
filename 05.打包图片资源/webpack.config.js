const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // 要使用多个loader处理用use
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        //在webpack5中我们使用assets-module打包css中图片的引用，因为在v5中url-loader已经被废弃
        test: /\.(jpg|png|gif)$/,
        type: "asset",
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024 // 25kb
          }
        },
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: "img/[name].[hash:6][ext]",
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: "./"
        }
      },
      {
        //webpack5 中处理html里img的src 需要 html-withimg-loader
        test: /\.html$/,
        loader: "html-withimg-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
};
