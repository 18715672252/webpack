0.npm i webpack webapck-cli webpack-dev-server

1.下载vue

2.下载vue-loader并配置

3.下载vue-template-compiler（下载即可）

4.npm i vue-style-loader -D，配置在/\.css$/或者/\.less$/，/\.sass$/中

5.配置插件VueLoaderPluginconst #VueLoaderPlugin = require('vue-loader/lib/plugin')

6.配置别名resolve节点下alias:{'vue$':'vue/dist/vue.esm.js'}

// ps：详情见vue-loader官网：https://vue-loader.vuejs.org/zh/guid

