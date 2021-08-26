<template>
    <div class="child">
        {{money}}
        <button><span>花钱</span></button>
    </div>
</template>
<script>
export default {
  props:["money"]
}
</script>
<style scoped>
.child{
    border: 2px solid green;
   padding: 5px;
}
</style>