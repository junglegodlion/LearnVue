import Vue from 'vue'
import App from './App'
// 默认会在router目录下找index文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
