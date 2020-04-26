/*
tree shaking (锤晒啃)
概念：1个模块可能有多个方法，只要其中某个方法使用到了，则整个文件都会被打包到bundle里面去，
tree shaking就是只把用到的方法打入bundle，没用则会在uglify阶段擦除掉

使用：webpack默认支持，在.babelrc里面设置moudle:false即可，mode:production默认开启

要求：必须是es6语法

*/
