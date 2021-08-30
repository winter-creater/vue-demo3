// 非完整版本
import Vue from 'vue'
// import App from './App.vue'
// import Mixins from './components/Mixins.vue'
import Pro from './provide-inject/Pro.vue'

// 完整版本bootCdn引入
// const Vue = window.Vue

Vue.config.productionTip = false

// 全局指令v-x，可以在任何组件使用v-x
Vue.directive('x', {
  inserted: function (el) {
    el.addEventListener('click', () => { console.log('x') })
  }
})

new Vue({
  directives: {
    'on2': {
      inserted(el, info) {
        // console.log(info.arg)
        el.addEventListener(info.arg, info.value)
      },
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value)
      },
    }
  },
  //   template: `
  // <button v-on2:click="hi">点我</button>
  // `,
  methods: {
    hi() {
      console.log('hi');
    }

  },
  // render: h => h(Mixins),
  render: h => h(Pro),

}).$mount('#app')
