<template>
    <p id = "playStats"> Geschafft!<br>
      Du hast {{Math.round(prop.percentUser)}}% erreicht.<br>
      Starte gleich ein neues Quiz!
      </p>
  </template>
  
  <script setup>
  import {ref, watch} from "vue"
  import {store} from "./PlayStore.js"

  const prop = defineProps({percentUser:Number})

  </script>

  <style>
    #playStats{
      height: 100%;
      width: 100%;
      background-color: #d4cdcd8c;
      color: rgb(0, 0, 0);
      border-radius: 10px;
      font-size: 100%;
      display: flex;
      justify-content: center;
      align-items: center;  
      text-align: center;
    }
  </style>