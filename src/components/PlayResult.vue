<template>
    <p id = "playResult"> {{entryText}}<br>{{rateText}}<br>{{distText}} 
      </p>
  </template>
  
  <script setup>
  import {ref, watch} from "vue"
  import {store} from "./PlayStore.js"
  
  let props = defineProps({
    distUser: Number,
  })

  let distR = ref(0)
  let entryText = ref(0)
  let distText = ref(0) 
  let rateText = ref(0)
  
  // If userdistance is not changed, watch capital change to update text
  watch(
  () => store.capEntry, // First callback is triggered by vue to collect dependencies
  () => { // Second callback is triggered on dependency change
    entryText.value = store.capEntry + " liegt in " + store.couEntry +"."
    distText.value = "Versuche bei der nächsten Frage die Haupstadt auf der Karte zu markieren."
    rateText.value = ""
  })

  // Update result text based on user distance.
  watch(
  () => props.distUser, // First callback is triggered by vue to collect dependencies
  () => { // Second callback is triggered on dependency change
    if (props.distUser == null){
      entryText.value = store.capEntry + " liegt in " + store.couEntry +"."
      distText.value = "Versuche bei der nächsten Frage die Haupstadt auf der Karte zu markieren."
      rateText.value = ""
    }
    else{
      distR = Math.round(props.distUser)
    
      entryText.value = store.capEntry + " ist die Hauptstadt von " + store.couEntry +"."
      distText.value = "Deine Distanz zu" + store.capEntry + " ist " + distR + " km."
    
      if(distR < 50){rateText.value = "Fantastisch, du hast herausragende geografische Kenntnisse!"}
      else if(distR  < 150){rateText.value = "Beeindruckend, du hast exzellente geografische Kenntnisse!"}
      else if(distR  < 300){rateText.value = "Erstklassig, das ist ganz in der Nähe!"}
      else if(distR  < 450){rateText.value = "Hervorragend, die Haupstadt ist nicht weit!"}
      else if(distR  < 900){rateText.value = "Sehr gut, nur eine kleine Ungenauigkeit!" }
      else if(distR  < 2000){rateText.value = "Ganz gut, zumindest die richtige Richtung!"}
      else {rateText.value = "Macht nichts, die nächste Stadt kennst du!"}
    }
  });
//  Congratulations, superb geographical knowledge!
// Congratulations, excellent geographical knowledge!
// Nicely done, thats nearby!
// Quite good!
// Some inaccuracies!
// At least the right direction!
// Oh no, better practice some more!

  </script>

  <style>
  #playResult{
    height: 80%;
    width: 80%;
    top: 10%;
    left: 10%;
    color: rgb(0, 0, 0);
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
  }
  </style>