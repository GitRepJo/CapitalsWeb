<template>  
  <div id="playControl">  
    <Transition name="progress">
      <p id = "playControlProgress" v-if = "timerOn"></p>
    </Transition> 
    <button id="playControlButton" @click="onClick" > {{buttonText}} </button>
  </div>
</template>

<script setup>

  import {ref, watch} from "vue"
  import {state} from "./StoreState.js"
  import {geo} from "./StoreGeo.js"
  import {useRandCap} from "./PlayControlRandCap.js"

  let questionCounter = 0
  let timerOn = ref(false) // Timer on/off for time to answer question is shown
  let buttonText = ref("Starte das Quiz!")
  
  state.questionNumber = 3
  state.setStartState()

  let timeOut = null

  function onClick(){  
    // Result state
    if (state.endState){
      state.setResultState()
      buttonText.value = "Starte ein neues Quiz!"
    }
    // Answer state
    else if (state.questionState && questionCounter != state.questionNumber ){
      state.setAnswerState()
      buttonText.value = "Nächste Frage"
      timerOn.value = false
      clearTimeout(timeOut)
    }
    // Question state
    else if ((state.startState || state.answerState  || state.resultState) 
      && questionCounter < state.questionNumber){
      let entry = useRandCap()
      geo.setEntry(entry.cou, entry.cap, entry.lon, entry.lat)
      state.setQuestionState()
      questionCounter ++
      buttonText.value = 
          questionCounter + "/"+ 
        state.questionNumber + " Wo liegt die Hauptstadt " + 
        geo.capEntry + "?"
      timerOn.value = true
      timeOut = setTimeout(onTimer, 20000)
    }
    // End state
    else if (questionCounter >= state.questionNumber){
      state.setEndState()
      buttonText.value = "Alle Quizfragen beantwortet!"
      questionCounter = 0
      timerOn.value = false
      clearTimeout(timeOut)   
    }
  }

  function onTimer(){
    if (state.questionState && questionCounter != state.questionNumber ){
      state.setAnswerState()
      buttonText.value = "Nächste Frage"
      timerOn.value = false
      clearTimeout(timeOut)
    }
    else{
      state.setEndState()
      buttonText.value = "Alle Quizfragen beantwortet!"
      questionCounter = 0
      timerOn.value = false
      clearTimeout(timeOut)   
    }
  } 

</script>

<style>
  .progress-enter-active{transition: transform  20.0s linear;}

  .progress-enter-from {transform: scaleX(0.01);}
 
  #playControl{
    position:relative;
    height:100%;
    width: 100%;
  }
  #playControlButton{
    position:absolute;
    height:100%;
    width: 100%;
    border-radius: 10px;
    font-size: 100%;
    text-align: center;
    background-color: #ececec69;
    color: rgb(0, 0, 0);
  }
  #playControlProgress{
    transform-origin:left center;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-color: #a09f9f71;   
  }

</style>