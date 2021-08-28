// 非完整版本
// import Vue from 'vue'
// import App from './App.vue'
// 完整版本bootCdn引入


const Vue = window.Vue
Vue.config.productionTip = false

// 全局指令v-x，可以在任何组件使用v-x
Vue.directive('x', {
  inserted: function (el) {
    el.addEventListener('click', () => { console.log('x') })
  }
})

new Vue({
  template: `
<button v-on:click="hi">点我</button>
`,
  methods: {
    hi() {
      console.log('hi');
    }

  }
  // render: h => h(App),

}).$mount('#app')
