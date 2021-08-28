<template>
    <div>Child2.vue</div>
</template>
<script>
import log from '../mixins/log.js'
export default {
   data(){
       return{
           name:"Child2"
       }
   },
   mixins:[log]

}
</script>