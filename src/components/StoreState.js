// store.js
import { reactive } from 'vue'

export const state = reactive({ 

  questionNumber : 0,

  startState   : false,
  questionState: false,
  answerState  : false, 
  endState     : false,
  resultState  : false,

  startText: false,
  answerText: false,
  resultText: false,
  
  setStartState(){
    this.startText  = true
    this.answerText = false
    this.resultText = false

    this.startState   = true
    this.questionState= false
    this.answerState  = false
    this.endState     = false
    this.resultState  = false   
  },

  setQuestionState(){
    this.startText  = false
    this.answerText = false
    this.resultText = false

    this.startState   = false
    this.questionState= true
    this.answerState  = false
    this.endState     = false
    this.resultState  = false 
  },

  setAnswerState(){
    this.startText  = false
    this.answerText = true
    this.resultText = false
    
    this.startState   = false
    this.questionState= false
    this.answerState  = true
    this.endState     = false
    this.resultState  = false
  },

  setEndState(){
    this.startText  = false
    this.answerText = true
    this.resultText = false

    this.startState   = false
    this.questionState= false
    this.answerState  = false
    this.endState     = true
    this.resultState  = false
  },
  
  setResultState(){
    this.startText  = false
    this.answerText = false
    this.resultText = true

    this.startState   = false
    this.questionState= false
    this.answerState  = false
    this.endState     = false
    this.resultState  = true
  }
})