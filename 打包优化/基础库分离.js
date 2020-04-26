/*
假如用vue写的项目
基础库分离的意思：将vue,vue-router,vuex基础包通过cdn方式引入，不在打包进dist文件
方法1：html-webpack-externals-plugin插件
npm i html-webpack-externals-plugin -D
*/
let HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
module.exports = {
    plugins:[
        new HtmlWebpackExternalsPlugin({
            externals:[
                {
                    module:'vue',
                    entry:'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
                    global:'Vue'
                },
                {
                    module:'vuex',
                    entry:'https://unpkg.com/vuex@2.0.0.js',
                    global:'Vuex'
                },
                {
                    module:'vue-router',
                    entry:'https://unpkg.com/vue-router@2.0.0/dist/vue-router.js',
                    global:'Vue-Router'
                }
            ]
        })
   ]
}
//这样配置就会在模板html文件中引入这三个JS文件,打包后的html文件也会自动引入
