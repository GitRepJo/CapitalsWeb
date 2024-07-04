<template>
  <div id="appPlay">
    
    <div id ="appPlayMap">
      <Map @posUser = "getUser"/>
    </div>
    
    <div id ="appPlayControl">
      <ControlButton />
    </div>

    <div id="appPlayResult" v-show="resultOn">
      <ResultText @click="()=>resultOn = false" :distUser="playDistUser" />
    </div>

    <div id="appPlayInit" v-show="initOn">
      <InitText @click="()=>initOn = false" />
    </div>

    <div id="appPlayStats" v-show="statsOn">
      <StatsText @click="()=>statsOn = false" :percentUser="playPercentUser"/>
    </div>

  </div>
</template>

<script setup>
  import ResultText from './PlayResult.vue';
  import Map from './PlayMap.vue';
  import ControlButton from './PlayControl.vue';
  import InitText from './PlayInit.vue';
  import StatsText from './PlayStats.vue';
  import { ref, watch } from 'vue'
  import {useLatLonDiff} from "./PlayLatLonDiff.js"
  import {store} from "./PlayStore.js"
  import {useToPercentage} from "./PlayToPercentage.js"

  let initOn = ref(true)
  let statsOn = ref(false)
  let resultOn = ref(false)
  let playDistUser = ref(0)
  let initCondition = true
  let playPercentUser = ref(0)
  let percentUserSum = 0

  // Manage text in according to state
  watch(
  () => store, 
  () => { 
    if (store.answerState){
      percentUserSum += useToPercentage(playDistUser.value)
      console.log("play points user", percentUserSum)
    }
    if (store.endState){
      percentUserSum += useToPercentage(playDistUser.value)
      playPercentUser.value = percentUserSum / store.questionNumber
      
      console.log("play points user", percentUserSum)
      console.log("play points user total", playPercentUser.value )
      percentUserSum = 0
    }

    if (store.answerState || store.endState){ 
      resultOn.value = true
       
    }
    else {resultOn.value = false}
   
    if(store.answerState) {initCondition = false}

    if (store.questionState) {initOn.value = false}

    if  (store.startState && !initCondition) {statsOn.value = true}
    else {statsOn.value = false}

  },{deep:true})

  function getUser(lonUser, latUser) {
    playDistUser.value = useLatLonDiff(latUser, lonUser, store.latEntry,store.lonEntry )
  }
  
</script>

<style>
#appPlay {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  position: relative;
}

#appPlayStats{
  top: 30%;
  left: 20%;
  height: 30%;
  width: 60%;
  position: absolute;
}

#appPlayInit{
  top: 30%;
  left: 20%;
  height: 30%;
  width: 60%;
  position: absolute;
}

#appPlayResult{
  top: 30%;
  left: 20%;
  height: 30%;
  width: 60%;
  position: absolute;
  border-radius: 10px;
  background-color: #d4cdcd8c;
}

#appPlayMap{
  height:100%;
  width: 100%;
  position: absolute;
}

#appPlayControl{
  width: 80%;  
  left: 10%;
  bottom: 7%;
  height: 7%;
  position: absolute;
}

</style>