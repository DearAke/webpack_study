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
