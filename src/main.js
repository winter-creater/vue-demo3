// 非完整版本

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局指令v-x，可以在任何组件使用v-x
Vue.directive('x', {
  inserted: function (el) {
    el.addEventListener('click', () => { console.log('x') })
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
