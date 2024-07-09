<template>
  <div id="appPlay">
    
      <div id ="appPlayMap">
        <Map @posUser = "getUser"/>
      </div>
      
      <div id ="appPlayControl">
        <ControlButton />
      </div>
  
      <div id="appPlayResult" v-show="state.answerText">
        <AnswerText @click="()=>state.answerText = false" :distUser="playDistUser" />
      </div>
  
      <div id="appPlayInit" v-show="state.startText">
        <StartText @click="()=>state.startText = false" />
      </div>
  
      <div id="appPlayStats" v-show="state.resultText">
        <ResultText :percentUser="playPercentUser"/>
      </div>
  
  </div>
</template>

<script setup>
  import AnswerText from './PlayAnswerText.vue';
  import Map from './PlayMap.vue';
  import ControlButton from './PlayControl.vue';
  import StartText from './PlayStartText.vue';
  import ResultText from './PlayResultText.vue';
  import { ref, watch } from 'vue'
  import {useLatLonDiff} from "./PlayLatLonDiff.js"
  import {state} from "./StoreState.js"
  import {geo} from "./StoreGeo.js"
  import {useToPercentage} from "./PlayToPercentage.js"

  let playDistUser = ref(0)
  let playPercentUser = ref(0)
  let percentUserSum = 0

  // Manage uservalues according to state
  watch(
  () => state, 
  () => { 
    if (state.answerState){
      percentUserSum += useToPercentage(playDistUser.value)
    }
    if (state.endState){
      percentUserSum += useToPercentage(playDistUser.value)
      playPercentUser.value = percentUserSum / state.questionNumber
      percentUserSum = 0
    }
  },{deep:true})

  function getUser(lonUser, latUser) {
    playDistUser.value = useLatLonDiff(latUser, lonUser, geo.latEntry, geo.lonEntry )
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
  height: 40%;
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