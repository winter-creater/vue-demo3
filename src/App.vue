<template>
  <div id="app">
    <p>儿子向父亲要零花钱例子</p>
    <p>父亲：</p>
    App.vue 我现在有 {{total}}
    <hr>
    <Child :money.sync="total"/>
    <!-- :money="total" v-on:update:money="total=$event"
    等价于 :money.sync="total"
     -->

    <!-- $event获取子组件的$emit后面的参数 -->
     </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  data(){
    return{total:10000}
  },
  components: {Child}
}
</script>

<style lang="scss">
#app {
  border: 3px solid red;
  padding: 10px;
  
}
</style>
