<template>
    <div>Child1.vue</div>
</template>
<script>
export default {
data(){
    return{
        name:"Child1",
        time:undefined
    }
},
created(){
    this.time=new Date();
    console.log(`${this.name}出生了`);
},
beforeDestroy(){
    const now=new Date();

    console.log(`${this.name}死亡了，共生存了${now-this.time}ms`);
}
}
</script>