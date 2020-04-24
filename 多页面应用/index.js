//1.一个页面对应一个入口
//2.一个页面对应一个html-webpack-plugin
//多页面打包的通用方案
//npm i glob -D
//利用glob.sync动态获取有多少个入口；entry:glob.sync(path.resolve(__dirname,'./src/*/main.js'))
//glob.sync动态获取入口文件时，入口文件必须统一名称，路径级别必须相同
//模板文件也必须统一名称,路径级别必须相同
const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssEctractPlugin = require('mini-css-extract-plugin')
let optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
const glob = require('glob')
const setMpa = ()=>{
    const entry = {};
    const htmlWebpackPlugin = []
    //获取统一级别路径级别，和统一名称的所有入口文件的绝对路径地址
    const entryFiles = glob.sync(path.resolve(__dirname,'./src/*/index.js'))
    entryFiles.map((item)=>{
        //某个js入口文件相对于webpack.config.js的相对路径
        const pageNameSrc = `./src/${item.split('/')[6]}/index.js`
        //某个入口文件的的父级文件夹名称，用来设置打包后承载该js入口文件的html文件的名称
        const pageName = item.split('/')[6]
        //统一设置所有的js入口文件，
        //key为该js入口文件的父级文件夹名称，用来设置该js入口文件打包后的js文件名称
        //value为该js入口文件相对于webpack.config.js的相对路径
        entry[pageName] = pageNameSrc
        htmlWebpackPlugin.push(
            new HtmlWebpackPlugin({
                template: `./src/${pageName}/index.html`,//js入口文件相对应的html模板文件
                filename:`${pageName}.html`,//以js入口文件的父级文件夹名称，设置打包后去承载该js入口文件的html文件名称
                chunks:[pageName],//把该js入口文件打包后的js文件插入到对应html文件中，
            })
        )
    })
    
    return {
        entry,
        htmlWebpackPlugin
    }
}
const { entry, htmlWebpackPlugin } = setMpa()


module.exports = {
    entry,
    output:{
        filename:'js/[name]_[chunkhash:8].js',
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
                            plugins:()=>[
                                require('autoprefixer')({
                                    overrideBrowserslist:['last 2 version','>1%','ios 7']
                                })
                            ]
                        }
                    },
                    {
                        loader:'px2rem-loader',
                        options:{
                            remUnit:37.5,
                            remPrecision:8
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
        new MiniCssEctractPlugin({
            filename:'css/abc[contenthash:8].css'
        }),
        new optimizeCssAssetsWebpackPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano')
        }),
        new CleanWebpackPlugin()
    ].concat(htmlWebpackPlugin)
}
/*
总结：
    注意：多页面应用通用打包方式
    1：所有js入口文件的名称为abc，则所有的模板html文件也要叫abc
    2：一个入口文件和所对应模板html文件要在同一个文件夹内
    3：glob.sync(path.resolve(__dirname,'./src/*/index.js'))获取的是所有入口文件的绝对路径
    理解：
    以js入口文件的父级文件夹的名称来设置入口js文件打包后的js文件名称，也用来设置打包后承载该打包后js的html文件名称




*/