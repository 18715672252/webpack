/*文件指纹（打包之后文件带有hash值）
文件hash有三种生成方式
1.hash：和整个项目有关，只有项目文件修改，整个项目的构建的hash才会改变
2.Chunkhash：和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值
3.Contenthash：根据文件的内容啦定义hsah值，文件内容不变，则COntenthash不变
一般js文件用chunkhash给打包生成后js文件，添加hash值
一般css文件用contenthash*/



//多入口多出口（适合多页应用）entry是个对象：
//key值:即为该入口文件打包后的文件名字，例：入口文件为'./src/index.js，webapck对该文件进行打包 ， 打包后输出的文件名为app.js
//value为入口文件的相对路径
//为打包后的js文件设置hash的配置(打包生成为，带有8为hash值的app1xxxxxxxx.js和app2.xxxxxxxx.js)
module.exports = {
    entry:{
        app1:'./src/index.js',
        app2:'./src/index2.js'
    },
    output:{
        filename:'[name][chunkhash:8].js',
        path:path.resolve(__dirname,'../dist')
    }
}
//多入口单出口和单入口单出口文件hash配置(打包生成为，带有8为hash值的mainxxxxxxxx.js)
module.exports = {
    entry:['./src/index.js','./src/index2.js'],
    entry:'./src/index.js',
    output:{
        filename:'main[chunkhash:8].js',
        path:path.resolve(__dirname,'../dist')
    }
}
//提取css打包到css文件中并为打包生成的css文件设置hash的配置，插入到HtmlWebpackPlugin配置的html文件中
//要用到插件mini-css-extract-plugin
//还要用到mini-css-extract-plugin的loader(该loader不能与style-loader一起使用)
let MiniCssEctractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry:{
        app1:'./src/index.js',
        app2:'./src/index2.js'
    },
    output:{
        filename:'[name][chunkhash:8].js',
        //filename:'js/[name][chunkhash:8].js',//该配置可以在生成的dist文件夹下再生成一个js文件夹，把打包生成的js文件放在里面
        path:path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssEctractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new MiniCssEctractPlugin({
            filename:'abc[contenthash:8].css'//打包生成css文件为abcxxxxxxxx.css
            //filename:'[name][contenthash:8].css'////打包生成css文件为appxxxxxxxx.css
            //filename:'css/[name][contenthash:8].css'//该配置可以在生成的dist文件夹下再生成一个css文件夹，把提取css生成的css文件放在里面
        })
    ]
}