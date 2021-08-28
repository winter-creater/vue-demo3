<template>
<div id="app">
    <Child1 v-if="child1Visible"/>
    <button @click="child1Visible=false">x</button>
    <Child2/>
    <button>x</button>
    <Child3/>
    <button>x</button>
    <Child4/>
    <button>x</button>
    <Child5/>
    <button>x</button>
</div>
</template>
<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import Child3 from './Child3.vue'
import Child4 from './Child4.vue'
import Child5 from './Child5.vue'

export default{
    components:{
        Child1,
 Child2,
Child3,
Child4,
Child5
    },
    data(){
        return{
            child1Visible:true
        }
    }
}
</script>