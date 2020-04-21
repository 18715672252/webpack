//webpack.config.js配置时的路径问题
/*
entry的路径问题
1.当入口文件在src目录下的直接可以,entry:'./src/index.js'
2.当入口文件不在src目录下要用path模块,entry:path.resolve(__dirname,'通过相对路径找到入口文件，webpack.config.js为起点')
output的路径问题
1.直接设置path: path:path.resolve(__dirname,'通过相对路径设置dist文件夹的位置，webpack.config.js为起点')
HtmlWebpackPlugin插件寻找html模板的问题
1.当模板文件在src目录下的直接可以,entry:'./src/index.html'
2.当模板文件不在src目录下要用path模块,entry:path.resolve(__dirname,'通过相对路径找到模板文件，webpack.config.js为起点')

*/
//ps:'./'可以直接用，'../'要用path.resolve，output中的path节点必须要用path.resolve或者path.join