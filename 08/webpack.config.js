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
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
        //webpack5 中处理html里的img 需要 html-withimg-loader
        test: /\.html$/,
        loader: "html-withimg-loader"
      },
      {
        exclude: /\.(html|js|jpg|png|gif|less|css)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash:6].[ext]",
              outputPath: "media",
              esModule: false // webpack5默认开启esModule 手动关闭
            }
          }
        ],
        type: "javascript/auto" // 阻止webpack5中asset
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
  // 启动devServer指令为：npx webpack-dev-server || webpack server
  // 对于html文件的改变，不会自动刷新页面。
  devServer: {
    static: {
      directory: resolve(__dirname, "build")
    },
    compress: true,
    port: 2233,
    open: true
  }
};
