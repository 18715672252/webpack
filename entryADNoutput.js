//webpack之entry用法
//1.单入口（适合单页应用）entry是个字符串或者是数组
module.exports = {
    entry:'./src/index',
    output:{
        filename:'build.js',
        path:path.resolve(__dirname + './dist')//当前文件下创建一个dist文件夹
    }
}
//2.多入口单出口（适合单页应用）entry是个数组：
module.exports = {
    entry:['./src/index','./src/index1.js'],
    output:{
        filename:'app.js',
        path:path.resolve(__dirname + './dist')
    }
}
//3.多入口多出口（适合多页应用）entry是个对象：
//output中filename节点设置为'[name].js'（name占位符）
//如果想让打包后的文件带有hash值的话output中filename节点设置为'[name][chunkhash:8].js'（chunkhash占位符）（配置详情见FileHash.js）
//key值:即为该入口文件打包后的文件名字，例：入口文件为'./src/index.js，webapck对该文件进行打包 ， 打包后输出的文件名为app.js
//value为入口文件的相对路径
module.exports = {
    entry:{
        app:'./src/index.js',
        build:'./src/app.js'
    },
    output:{
        filename:'[name].js',
        //filename:'[name].[hash].js'//打包后的文件带有hash值
        //filename:'[name].[Chunkhash].js'//打包后的文件带有hash值
        path:path.resolve(__dirname + './dist')
    }
}
//ps:
//1.单入口，多入口单出口时通过output对象下的filename属性值指定打包后文件的名字
//2.多入口多出口时entry是个对象，通过entry对象的属性名（即key）来指定打包后文件的名字