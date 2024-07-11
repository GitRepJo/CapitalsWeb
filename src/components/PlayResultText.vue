<template>
  <div id = "playResultText">
    <p id = "playResultTextField1"> Ergebnis </p>
    <p id = "playResultTextField2">  Du hast {{Math.round(prop.percentUser)}}% erreicht.</p>
    <p id = "playResultTextField3"> Starte gleich ein neues Quiz!
    </p>
    
    <p id = "playResultTextDescription" v-show="enterMessage !=true">
      Eintragen in Rangliste als:
    </p>
    <div id="playResultTextEntry" v-show="enterMessage !=true">
      <input  id = "playResultTextInput" v-model="message" placeholder="Name" />
      <button   id="playResultTextEnter" @click="makeEntry">Eintragen</button>
    </div>
    <p  id = "playResultTextDescription" v-show="errorMessage">
      Fehler! Datenbank nicht verfügbar!
    </p>
    
    <p  id = "playResultTextResult" v-show="enterMessage"> 
      {{betterPercent }}% vor dir haben genauer getippt!
    </p>
    <div id = "playResultTextBar" v-show="enterMessage" > 
      <div id = "playResultTextFill" >  </div>
    </div>
  </div>
</template>
  
<script setup>
  import {ref, watch} from "vue"
  import {state} from "./StoreState.js"
  import {supabase} from '../lib/supabaseClient.js'
  
  const prop = defineProps({percentUser:Number})
  let message = ref("")
  let errorMessage = ref(false)
  let enterMessage = ref(false)
  let betterPercent = ref(0)
  let resultBar = ref("0%")
  let entriesDatabase = ref(0)
  let userBetter = ref(0)
  let dataBase = ref([])

  let dateFull = new Date()
  
  async function makeEntry(){
    if (message.value != ""){
      const { data, error } = await supabase.from('Score').insert([{
        percent: prop.percentUser,
        username: message.value,
        date: dateFull,
        id: Date.now()
      },])

      if (error != null){ errorMessage.value = true}
      
      enterMessage.value = true
      
      for (const key of dataBase.value) {
        if (key.percent > prop.percentUser)
         userBetter.value ++
        }
      
      // Rank in percent
      let scorePercent = 100 - Math.round(100 / entriesDatabase.value * userBetter.value)
      resultBar.value = scorePercent + "%"
      // Percent that are better
      betterPercent.value = 100 - scorePercent

      userBetter.value = 0
    }
  }

  async function getDatabase(){
    const { data } = await supabase.from('Score').select()
    dataBase.value = data
    entriesDatabase.value = data.length
  }
  getDatabase()
  
  // Watch any state before result state to sest back entry field, here question is chosen.
  watch(
  () => state.questionState, 
  () => { errorMessage.value = false
          enterMessage.value = false  })

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
      align-items: center;
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
    #playResultTextResult{
      margin-top: 5%;
      
    }
    #playResultTextBar{
      height: 15%;
      width: 80%;
      border-radius: 5px;
      background-color: rgba(250, 249, 249, 0.466);
    }
    #playResultTextFill{
      height: 100%;
      width: v-bind(resultBar);
      border-radius: 5px;
      background-color: rgb(8, 116, 4);
    }
</style>