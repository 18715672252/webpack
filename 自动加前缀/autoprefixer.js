/*
用处1.自动css补齐前缀
1.npm i postcss-loader autoprefixer -D
2.let Autoprefixer = require('autoprefixer')
3.配置postcss-loader，在解析样式文件的use中配置该loader（该loader位置在样式解析的loader后面）并在该loader中的options中配置Autoprefixer插件
用处2.px自动转化为rem
*/
const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssEctractPlugin = require('mini-css-extract-plugin')
let optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let Autoprefixer = require('postcss-loader')
module.exports = {
    entry:{
        app1:'./src/index.js',
        app2:'./src/index1.js'
    },
    output:{
        filename:'js/[name][chunkhash:8].js',
        path:path.resolve(__dirname,'./dist')
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'9999',
        open:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssEctractPlugin.loader,
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:[
                                new Autoprefixer({
                                    // 兼容浏览器前两个版本 ， 兼容使用人数大于1%的浏览器，兼容ios 7及以上
                                    overrideBrowserslist:['last 2 version','>1%','ios 7']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            esModule:false
                        }
                    }
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new MiniCssEctractPlugin({
            filename:'css/abc[contenthash:8].css'
        }),
        new optimizeCssAssetsWebpackPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano')
        }),
        new CleanWebpackPlugin()
    ]
    
}