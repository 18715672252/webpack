//自动清理构建目录产物(两种方法)
//1.通过npm scripts清理构建目录(npm run build 先删除原来的dist文件夹，再打包)
//"build": "rm -rf ./dist && webpack --config webpack.config.js",





//2.使用clean-webpack-plugin插件
