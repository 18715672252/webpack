/*
常用的plugin
1.commons-chunk-plugin 将chunks相同的模块代码提取成公共的JS
2.clean-webpack-plugin 清理构建目录
3.mini-css-extract-webpack-plugin 将css从打包后js文件提取成一个css文件
4.copy-webpack-plugin 将文件或者文件夹拷贝到构建的输出目录
5.html-webpack-plug 创建html文件去承载打包后的js和css文件
6.uglifyjs-webpack-plugin 压缩js
7.zip-webpack-plugin 将打包出的资源压缩成一个zip包
*/
/*
用法
1.npm i 插件名 -D
2.let CleanWebpackPlugin = require('clean-webpack-plugin')
3.plugins:[
    new CleanWebpackPlugin(options),options为配置对象
]
*/
module.exports = {
    plugins:[

    ]
}
