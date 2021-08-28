<template>
    <div>Child1.vue</div>
</template>
<script>
import log from '../mixins/log.js'
export default {
   data(){
       return{
           name:"Child1"
       }
   },
   mixins:[log]

}
</script>