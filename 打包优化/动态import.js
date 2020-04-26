/*
使用场景
    1.抽离相同代码到一个共享块
    2.脚本懒加载
懒加载JS方式
    1.CommonJS语法 let a = require.ensure('a.js')
    2.es6语法 动态import 
    动态import的使用方法 import('./a.js).then(res=>{
        默认暴露export dedefault的话通过res.default取到a.js暴露的东西
        统一暴露export {a:fn}或者分别暴露export a fn的话通过res.a去a.js暴露的某一个东西
    })
        1.npm i @babel/plugin-syntax-dynamic-import -D
        2.在.babelrc中配置
        {
            "plugins":["@babel/plugin-syntax-dynamic-import"]
        }




*/