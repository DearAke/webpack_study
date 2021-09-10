## 踩坑

1. webpack4 处理 css 引用图片使用 url-loader。
   但是在 webpack5 中我们使用 assets-module，因为在 v5 中 url-loader 已经被废弃。
   webpack5 处理图片配置如下：
   <!-- {
        test: /\.(jpg|png|gif)$/,
        type: "asset",
            parser: {
                dataUrlCondition: {
                maxSize: 25 \* 1024 // 25kb
            }
        },
            generator: {
                filename: "img/[name].[hash:6][ext]",
                publicPath: "./"
            }
   } -->

2. webpack5 中处理 html 里 img 的 src 需要 html-withimg-loader

3. webpack5 打包 ttf|woff|woff2 时（可能关于其他的字体文件也不需要处理，未实践），不需要写配置即可实现，可能是自己没找到打包的准确方法或是与其匹配的 loader。

4. 安装 webpack-dev-server 要通过 webpack -v 指令查看有没有安装好，如果 webpack -v 没有出现 webpack-dev-server 那就说明没有安装好。如果局部安装不上 webpack-dev-server 建议全局安装 webpack-dev-server。

5. 由第 4 点引出，关于 webpack 相关的一些 npm 包，应该都是通过 webpack -v 来查看有没有安装好。特别是局部安装时，一定要注意安装是否成功，通过 webpack -v 来查看有无版本号，如果没有的话就是没有安装上去（安装的问题）。webpack 的局部可能都安装不上，所以建议全局安装。
