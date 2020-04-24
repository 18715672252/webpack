//利用split-chunk-plugin插件(webpack内置插件，可以直接用)
//options中chunks的参数说明
//async(默认)：异步引入的库进行分离
//inital：同步引入的库进行分离
//all：全部进行分离











/*module.exports = {
    //...
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,//抽离的公共包最小的大小（单位字节）
        minRemainingSize: 0,
        maxSize: 0,//抽离的公共包最大的大小（单位字节）
        minChunks: 1,//某个函数使用的次数大于1的话，就会提取成公共的文件
        maxAsyncRequests: 6,
        maxInitialRequests: 4,//浏览器请求异步资源的数量
        automaticNameDelimiter: '~',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  }*/
  //例子1：可以基础库分离(分离vue相关的基础库)
  module.exports = {
    //...
    optimization: {
      splitChunks: {
        minSize:0,
        cacheGroups: {
          commons: {
            test: /(vue|vuex|vue-router)/,
            name: 'vendors',
            chunks:'all'
          }
        }
      }
    }
  };
