//提取css
//提取css打包到css文件中并为打包生成的css文件设置hash的配置，插入到HtmlWebpackPlugin配置的html文件中
//要用到插件mini-css-extract-plugin
//还要用到mini-css-extract-plugin的loader(该loader不能与style-loader一起使用)
//提取vue中css并生成文件夹的时候，MiniCssEctractPlugin.loader要放在vue-style-loader后面
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
            //filename:'[name][contenthash:8].css'////打包生成css文件为app1xxxxxxxx.css
            //filename:'css/[name][contenthash:8].css'//该配置可以在生成的dist文件夹下再生成一个css文件夹，把提取css生成的css文件放在里面
        })
    ]
}
/*
ps:
    1.提取css形成css文件命名，如果使用[name]占位符的话，css文件的名字和其对应的entry中js文件所对应key一样，该js文件引入到哪里那么该css也引入到哪里
    例子：假如./src/index.js中引入了一个css文件的话，那么提取css形成的css文件名字为app1.css
    2.不适用[name]占位符的话，可以自定义
    3.假如css文件命名使用[name]占位符的话，提取css形成的css文件的名字看引入该css的js文件的名字（或者entry的key值），
        插入到哪个模板看引入该css的js文件插入到哪个模板















*/
