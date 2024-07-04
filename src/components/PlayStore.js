// store.js
import { reactive } from 'vue'

export const store = reactive({ 

  questionNumber : 0,

  couEntry : "",
  capEntry : "",
  lonEntry : null,
  latEntry : null,
  /**
  * Set a new location entry
  * @param {String} cou
  * @param {String} cap
  * @param {Number} lon
  * @param {Number} lat
  */
  setEntry(cou, cap, lon, lat){ 
    this.couEntry = cou
    this.capEntry = cap
    this.lonEntry = lon
    this.latEntry = lat
  },

  startState   : false,
  questionState: false,
  answerState  : false, 
  endState     : false,
  
  setStartState(){
      this.startState   = true
      this.questionState= false
      this.answerState  = false
      this.endState     = false
      
  },
  setQuestionState(){
      this.startState   = false
      this.questionState= true
      this.answerState  = false
      this.endState     = false
     
  },
  setAnswerState(){
      this.startState   = false
      this.questionState= false
      this.answerState  = true
      this.endState     = false
      
  },
  setEndState(){
      this.startState   = false
      this.questionState= false
      this.answerState  = false
      this.endState     = true
     
  },
  setNewState(){
      this.startState   = false
      this.questionState= false
      this.answerState  = false
      this.endState     = false

  }
})