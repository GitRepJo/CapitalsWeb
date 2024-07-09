
<template>
  <div id="MenuTop" type="submit">
    <img id="MenuTopImage" src="./icons/bluemarble_small.png"
    @click="setSideTop">
  </div> 
</template>

<script setup>
import {state} from "./StoreState.js"

function setSideTop(){
  if (state.sideTop == true){
    state.unsetSide()}
  else {state.setSideTop()}
}

</script>

<style>
  #MenuTop{
    height: 100%;
    aspect-ratio: 1/1 ;
    display: flex;
    justify-content: center;
    align-items: center;  
  }
  #MenuTopImage{
    height: 70%;  
    transition: 1.5s;
  }

  #MenuTopImage:hover, #MenuTopImage:active{rotate: 180deg; }
</style>