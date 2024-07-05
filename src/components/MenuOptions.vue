
<template>
  <div id="MenuOptions"><img id="MenuOptionsImage" class="opacity" src="./icons/three_lines.png"></div> 
</template>

<script setup>

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
  
  }
  .opacity { filter: opacity(50%); }
</style>