//打包其他资源
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development",
  // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
  // 特点：只会在内存中编译打包，不会有任何输出!!!!
  // 启动devServer指令为：npx webpack-dev-server
  // 对于html文件的改变，不会自动刷新页面。
  // 修改index.js 以及 index.js 引入的文件 可以触发自动刷新
  devServer: {
    static: {
      directory: resolve(__dirname, "build")
    },
    compress: true,
    port: 1314,
    open: true
  }
};
