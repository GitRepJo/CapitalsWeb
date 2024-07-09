<template>
  <div id="appSide">
    
    <div id="appSideBackground" 
      @click="()=>state.unsetSide()" 
      v-show="state.sideTop || state.sideLeft">
    </div>   
    
    <div id="appSideLeft" v-show="state.sideLeft">
      <SideLeft />
    </div>

    <div id="appSideTop" v-show="state.sideTop" >
      <SideTop />
    </div>
   

  </div>
</template>

<script setup>
  import SideLeft from './SideLeft.vue';
  import SideTop from './SideTop.vue';
  import { ref, watch } from 'vue'
  import {state} from "./StoreState.js"
 

  // Manage uservalues according to state
  watch(
  () => state, 
  () => { 
   
    }
  ,{deep:true})

</script>

<style>
#appSide {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  position: relative;
}

#appSideLeft{
  top: 5%;
  height: 90%;
  width: 50%;
  position: absolute;
}
#appSideTop{
  top: 0%;
  height: 90%;
  left:10%;
  width: 80%;
  position: absolute;
}

#appSideBackground{
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color:   rgba(255, 255, 255, 0.397);
  position: absolute;
 
}


</style>