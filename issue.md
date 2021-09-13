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

6. 关于第 3 点的问题得到解决了。原因：url-loader 和 file-loader 都是废弃不会直接使用的，所以要想使用这些废弃的旧功能，需要加上 type:'javascript/auto' 但是不要忘了 还要加上 esModule: false ，因为 webpack5 是默认开启的。
关于学习踩坑的问题，可以去视频下方的视频看老哥们的评论，能少走很多弯路。
附上 b 站老哥的评论：
p7.出现打包后图片多出一倍，是 webpack 的 asset 模块又进行打包了一次，可以添加 type 来关闭，第二处就是打开 HTML 文件后图片引用失败且后缀为【object%20Module】是因为 webpack5 默认开启 esModule，手动设为 false 关闭就行
   <!-- {
    test:/\.(jpg|png|gif)/,
    loader:url-loader,
    options:{
    esModule: false, // webpack5 默认开启 esModule 手动关闭
    limit: 10\*1024,
    },
    type: javascript/auto // 阻止 webpack5 中 asset
   } -->
