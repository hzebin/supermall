// 自定义配置

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 在这里起别名
        'src': '@',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}