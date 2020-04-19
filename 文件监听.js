//文件监听是在文件发生变化时 ，自动构建出的输出文件
module.exports = {
    watch:true,//默认fasle
    watchOptions:{
        ignored:/node_modules/,//不见听的文件或者文件夹
        aggregateTimeout:300,//监听文件变化后等300ms后再去执行，默认300
        poll:1000//判断文件变化时通过不停询问系统指定文件有没有变化实现的，默认每秒询问1000次
    }

}