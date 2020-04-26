module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 内部默认：src:@
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

