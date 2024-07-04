<template>
    <p id = "playInit"> Quiz um die Welt<br>
      Errate die Position von Hauptstädten auf der Weltkarte.<br>
      Markiere die Haupstadt auf der Karte möglichst genau.
      </p>
  </template>
  
  <script setup>
  import {ref, watch} from "vue"
  import {store} from "./PlayStore.js"
 
  </script>

  <style>
    #playInit{
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