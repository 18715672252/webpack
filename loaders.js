//thread-loader 多进程打包js和css
module.exports = {
    module:{
        rules:[
            {
                test:/\.less$/,//解析那些文件
                use:['less-loader'],//用什么loader
                exclude:/node_modules/,//不解析哪个文件夹下的less文件
            }
        ]
    }
}

//解析es6语法（babel-loader）----------------------------------------------------------
//1.npm i @babel/core -D
//2.npm i @babel/preset-env -D
//3.npm i babel-loader -D
//4.创建.babelrc在项目根目录
/*5.配置如下
{
    "presets": [
        "@babel/preset-env"
    ]
}
*/
//6.配置loader如下
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            }
        ]
    }
}

//解析react的jsx语法----------------------------------------------
//1.npm i @babel/core -D
//2.npm i @babel/preset-env -D
//3.npm i babel-loader -D
//4.npm i react react-dom @babel/preset-react -D
//5.创建.babelrc在项目根目录
/*6.配置如下
{
    "presets": [
        "@babel/preset-env"，
        "@babel/preset-react"
    ],
    plugins:[
        "@babel/proposal-class-properties"
    ]
}
*/
//7.配置loader如下
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            }
        ]
    }
}

//解析css------------------------------------------------------------------
//1.nmp i style-loader css-loader -D
//2.loader配置如下
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']//loader的调用顺序为从右到左，从下到上,（先执行后面的）
            }
        ]
    }
}
//ps:先使用css-loader解析css,解析好的css传递给style-loader（css预处理语言以此类推）

//解析less---------------------------------------------------------------------------------------------------
//1.nmp i style-loader css-loader -D
//2.loader配置如下
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader','less-loader']//loader的调用顺序为从右到左，从下到上,（先执行后面的）
            }
        ]
    }
}
//ps:先使用css-loader解析css,解析好的css传递给style-loader（css预处理语言以此类推）

//解析图片1（file-loader解决通过js引入图片）import img from '../img/logo.png------------------------------------------------------------------------------------
//1.npm i file-loader -D
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:'file-loader'
            }
        ]
    }
}

//解析图片2（url-loader解决通过img标签通过ejs引入图片）<img src="<%= require(../img/1.png) %>">------------------------------------------------------------------------------------
//1.npm i url-loader -D
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            esModule:false
                        }
                    }
                ]
            }
        ]
    }
}
