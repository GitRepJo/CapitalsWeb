
<template>   
    
    <p id="appMenuTitel"> Quiz um die Welt </p>
   
    <div id ="appMenuNew">
      <MenuNew />
    </div>

    <div id ="appMenuOptions">
      <MenuOptions />
    </div>
  
</template>

<script setup>
import MenuNew from './MenuSideTop.vue';
import MenuOptions from './MenuSideLeft.vue';

</script>

<style>

  #appMenuTitel{
    height: 100%;
    width: 50%;
    left: 25%;
    font-size: 90%;
    display: flex;
    justify-content: center;
    align-items: center;  
    position: absolute;
  }

  #appMenuNew{
    aspect-ratio: 1 / 1;
    height: 90%;
    top: 5%;  
    right: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;  
    position: absolute;
  }

  #appMenuOptions{
    aspect-ratio: 1 / 1;
    height: 90%;
    left: 5px;
    top: 5%;    
    border-radius: 10px;
    font-size: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;  
    position: absolute;
    
  }
</style>