/*
scope hoisting（死库铺厚音死听）
存在大量闭包


会导致的问题：包体积增大，运行代码函数作用域变多，内存开销过大


模块转化分析：
    1.被webpack转化后的模块会带上一层包裹
    2.import会被转化为_webpack_require加载模块

原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量，防止变量名冲突

对比：通过scope hoisting可以减少函数声明的代码和内存开销

webpack4的mode:production(默认开启)
webpack3 plugins:[new webpack.optimize.ModuleConcatenationPlugin](这样开启)
*/