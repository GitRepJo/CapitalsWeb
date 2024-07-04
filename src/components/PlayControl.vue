<template>  
  <div id="playControl">  
    <Transition>
      <p id = "playControlProgress" v-if="timerOn"></p>
    </Transition> 
    <button id="playControlButton" @click="onClick" > {{buttonText}} </button>
  </div>
</template>

<script setup>

  import {ref, watch} from "vue"
  import {store} from "./PlayStore.js"
  import {useRandCap} from "./PlayControlRandCap.js"

  let questionCounter = 0
  let timerOn = ref(false) // Timer on/off for time to answer question is shown
  let buttonText = ref("Starte das Quiz!")
  
  store.questionNumber = 3
  store.setStartState()

  let timeOut = null

  function onClick(){  
    // Start state
    if (store.endState){
      store.setStartState()
      buttonText.value = "Starte ein neues Quiz!"
    }
    // Answer state
    else if (store.questionState && questionCounter != store.questionNumber ){
      store.setAnswerState()
      buttonText.value = "Nächste Frage"
      timerOn.value = false
      clearTimeout(timeOut)
    }
    // Question state
    else if ((store.startState || store.answerState) && questionCounter < store.questionNumber){
      let entry = useRandCap()
      store.setEntry(entry.cou, entry.cap, entry.lon, entry.lat)
      store.setQuestionState()
      questionCounter ++
      buttonText.value = 
          questionCounter + "/"+ 
        store.questionNumber + " Wo liegt die Hauptstadt " + 
        store.capEntry + "?"
      timerOn.value = true
      timeOut = setTimeout(callback, 20000)
    }
    // End state
    else if (questionCounter >= store.questionNumber){
      store.setEndState()
      buttonText.value = "Alle Quizfragen beantwortet!"
      questionCounter = 0
      timerOn.value = false
      clearTimeout(timeOut)   
    }
  }

  function callback(){
    if (store.questionState && questionCounter != store.questionNumber ){
      store.setAnswerState()
      buttonText.value = "Nächste Frage"
      timerOn.value = false
      clearTimeout(timeOut)
    }
    else{
      store.setEndState()
      buttonText.value = "Alle Quizfragen beantwortet!"
      questionCounter = 0
      timerOn.value = false
      clearTimeout(timeOut)   
    }
  } 

</script>

<style>
  .v-enter-active{transition: width 20.0s linear;}
  .v-enter-from{width: 0%;}  

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
    position:absolute;
    height:100%;
    background-color: #a09f9f71;
  }

</style>