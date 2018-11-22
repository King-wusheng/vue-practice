const path = require('path')

function resolve (url) {
  return path.resolve(__dirname, url)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('list', resolve('./src/components/common/list'))
      .set('styles', resolve('./src/assets/styles'))
      .set('json', resolve('./src/assets/json'))
      .set('pages', resolve('./src/pages'))
      .set('utils', resolve('./src/utils'))
      .set('node_modules', resolve('./node_modules'))
      .set('store', resolve('./src/store'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://webservice.juanpi.com',
          
        changeOrigin: true
      },
      '/cate':{
        target: 'https://m.juanpi.com',
        changeOrigin: true
      },
      '/search':{
        target: 'https://m.juanpi.com',
        changeOrigin: true
      },
      
      '/keywords':{
        target: 'https://m.juanpi.com',
        changeOrigin: true
      },
      '/shopcart/lists':{
        target:'https://m.juanpi.com',
        changeOrigin : true
      }
    }
  }
}


