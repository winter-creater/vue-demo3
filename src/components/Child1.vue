<template>
    <div>Child1.vue
        <ChangeThemeButton/>
    </div>
</template>
<script>
// import log from '../mixins/log.js'
import MyVue from '../extend/myVue.js'
import ChangeThemeButton from '../provide-inject/inject.vue'
export default {
    components:{ChangeThemeButton},
    extends:MyVue,
   data(){
       return{
           name:"Child1"
       }
   },
//    mixins:[log]

}
</script>