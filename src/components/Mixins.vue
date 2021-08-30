<template>
<div id="app">
    <Child1 v-if="child1Visible"/>
    <button @click="child1Visible=false">x</button>
    <Child2 v-if="child2Visible"/>
    <button  @click="child2Visible=false">x</button>
    <Child3 v-if="child3Visible"/>
    <button  @click="child3Visible=false">x</button>
    <Child4 v-if="child4Visible"/>
    <button  @click="child4Visible=false">x</button>
    <Child5 v-if="child5Visible"/>
    <button  @click="child5Visible=false">x</button>
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
            child1Visible:true,
            child2Visible:true,
            child3Visible:true,
            child4Visible:true,
            child5Visible:true

        }
    }
}
</script>