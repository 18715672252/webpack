//1.js文件压缩
/*
2.css压缩
（1）：下载插件optimize-css-assets-webpack-plugin
（2）：下载cssnano(预处理器)
ps:css文件压缩的前提是，要有提取css这一步骤（css提取见FileHash.js文件）
*/
let optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    plugins:[
        new MiniCssEctractPlugin({
            filename:'abc[contenthash:8].css'//打包生成css文件为abcxxxxxxxx.css
            //filename:'[name][contenthash:8].css'////打包生成css文件为appxxxxxxxx.css
            //filename:'css/[name][contenthash:8].css'//该配置可以在生成的dist文件夹下再生成一个css文件夹，把提取css生成的css文件放在里面
        }),
        new optimizeCssAssetsWebpackPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano')
        })
    ]
}
