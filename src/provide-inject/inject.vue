<template>
    <div><button @click="x">当前主题色：{{themeName}}   换肤</button></div>
</template>
<script>
export default {
   inject:['themeName','changeTheme'],
   methods:{
       x(){
       this.changeTheme()
   }
   }
}
</script>