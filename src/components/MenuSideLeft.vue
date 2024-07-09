
<template>
 
    <img @click="setSideMenu" id="MenuOptionsImage" 
      class="opacity" src="./icons/three_lines.png">
  
</template>

<script setup>
import {state} from "./StoreState.js"

function setSideMenu(){
  if (state.sideLeft == true){
    state.unsetSide()}
  else {state.setSideLeft()}
}

</script>

<style>
  #MenuOptions{
    font: italic 1.2rem "Fira Sans", serif;
    height: 100%;
    aspect-ratio: 1/1 ;
    display: flex;
    justify-content: center;
    align-items: center;  
  }
  #MenuOptionsImage{
    height: 60%;
    aspect-ratio: 1/1 ;
    font-size: 80%;
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;  
    transition: 0.3s;
    opacity: 0.3;
  }
  #MenuOptionsImage:hover, #MenuOptionsImage:active {opacity: 0.6}
  </style>