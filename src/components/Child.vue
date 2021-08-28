<template>
    <div class="child">
        
        <p v-x v-y>儿子：</p>
        {{money}}
        <button @click="$emit('update:money',money-100)"><span>花钱</span></button>
    </div>
</template>
<script>
// 不能直接用外部数据，会改变props，父组件会重新渲染  @click="money-=100"不能这么写
//Vue内置了eventBus,可用当前实例 $emit    @click="$emit('useMoney',money-100)"
export default {
    // 声明一个局部指令 v-y,只能在当前组件使用
    directives:{
        y:{
            inserted(el){
                el.addEventListener('click',()=>{console.log('y');})
            }
        }
    },
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