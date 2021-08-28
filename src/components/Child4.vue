<template>
    <div>Child4.vue</div>
</template>
<script>
import log from '../mixins/log.js'
export default {
   data(){
       return{
           name:"Child4"
       }
   },
   mixins:[log]

}
</script>