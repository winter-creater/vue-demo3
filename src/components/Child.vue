<template>
    <div class="child">
        
        <p>儿子：</p>
        {{money}}
        <button @click="$emit('useMoney',money-100)"><span>花钱</span></button>
    </div>
</template>
<script>
// 不能直接用外部数据，会改变props，父组件会重新渲染  @click="money-=100"不能这么写
//Vue内置了eventBus,可用当前实例 $emit    @click="$emit('useMoney',money-100)"
export default {
  props:["money"]
}
</script>
<style scoped>
.child{
    border: 2px solid green;
    margin: 10px;
    padding: 5px;
  
}
</style>