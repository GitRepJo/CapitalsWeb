<template>
  <div id="vueApp">

    <div id ="vueMenu">
      <Menu/>
    </div>
   
    <hr />
    
    <div id ="vuePlay">
      <Play/>
    </div>

  </div>
</template>

<script setup>
  import Play from './components/Play.vue';
  import Menu from './components/Menu.vue';
</script>

<style>
  #vueApp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 97vh;
    width: 95vw;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }

  #vueMenu{
    position: absolute;
    top: 1%;
    height: 8%;
    width: 100%; 
  }
 
  hr{
    position: absolute;
    top: 10%;
    height: 2px;
    width: 100%;
  }

  #vuePlay{
    position: absolute;
    top: 11%;
    height: 87%;
    width: 100%;
  }

</style>



