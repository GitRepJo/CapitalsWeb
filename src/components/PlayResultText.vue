<template>
  <div id = "playResultText">
    <p id = "playResultTextField1"> Ergebnis </p>
    <p id = "playResultTextField2">  Du hast {{Math.round(prop.percentUser)}}% erreicht.</p>
    <p id = "playResultTextField3"> Starte gleich ein neues Quiz!
    </p>
    <p id = "playResultTextDescription">Eintragen in Rangliste als:</p>
    <div id="playResultTextEntry">
      <input id = "playResultTextInput" v-model="message" placeholder="Name" />
      <button id="playResultTextEnter">Eintragen </button>
    </div>
  </div>
</template>
  
<script setup>
  import {ref, watch} from "vue"
  import {state} from "./StoreState.js"
  
  const prop = defineProps({percentUser:Number})
  let message = ref("")
</script>

<style>
    #playResultText{
      height: 100%;
      width: 100%;
      background-color: #d4cdcd8c;
      color: rgb(0, 0, 0);
      border-radius: 10px;
      font-size: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: top;
      text-align: center;
    }
    
    #playResultTextField1{
      margin-top: 5px;
      font-size: 140%;
   
    }
    #playResultTextField2{
     color:rgb(1, 95, 1);
     font-size: 120%;
    }
   
    #playResultTextDescription{
      margin-top: 5px;
      height: 10%;
      width: 100%;
    }
    #playResultTextEntry{
      display: flex;  
      justify-content: center;
      align-items: center;  
      text-align: center;
      height: 15%;
      width: 100%;
      gap: 10px;
    }
    #playResultTextInput{
      height: 100%;
      width: 40%;
      border-radius: 5px;
      
    }
    #playResultTextEnter{
      height: 100%;
      width: 40%;
      border-radius: 5px;
      background-color: rgb(0, 180, 0);
    }
</style>