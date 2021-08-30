<template>
    <div>Child1.vue</div>
</template>
<script>
// import log from '../mixins/log.js'
import MyVue from '../extend/myVue.js'
export default {
    extends:MyVue,
   data(){
       return{
           name:"Child1"
       }
   },
//    mixins:[log]

}
</script>