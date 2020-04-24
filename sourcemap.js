/*

五个关键字
1.eval 使用eval包裹模块代码
2.source-map：产生.map文件 (开发比较容易定位错误，可以看到源码，生产环境不要用)
3.cheap 不包含列信息
4.inline 将.map作为.DataURl嵌入，不单独生成.map文件
5.module 包含loader的sourcemap
 

*/
module.exports = {
    devtool:'eval'
}