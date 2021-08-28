<template>
    <div>Child5.vue</div>
</template>
<script>
import log from '../mixins/log.js'
export default {
   data(){
       return{
           name:"Child5"
       }
   },
   mixins:[log]

}
</script>