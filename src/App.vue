<template>
  <div id="vueApp" >
    
    <div id ="vueMenu">
      <Menu/>
    </div>

    <hr />

    <div id ="vuePlay" >
      <Play/>
    </div>

    <div id ="vueSide" v-if = "state.side == true" >
      <Side/>
    </div>

    <div id ="vueVerify" v-if = "sucess == false">
      
      <div id = "vueInteraction" >
        <input  id="vueInput" @input="inputChange" 
          v-model="password" placeholder="Passwort" />
        <button id="vueEnter" @click="enter">Bestätigen</button>
      </div>
      <Transition>
      <p id="vueInputError" v-show = "inputError"> Falsches Passwort  </p>
      </Transition>
   </div>
    
  </div>
</template>

<script setup>
  import Play from './components/Play.vue';
  import Menu from './components/Menu.vue';
  import Side from './components/Side.vue';
  import {state} from "./components/StoreState.js";
  import{ref} from "vue"
 
  let password = ref("")
  let sucess = ref(false)
  let inputError = ref(false)
  function enter(){
    if (password.value == "essen") {sucess.value = true}
    if (password.value != "essen") {inputError.value = true}
  }
  function inputChange(){inputError.value = false}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

  #vueApp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 95vh;
    top: 0vw;
    width: 95vw;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }
  #vueVerify{
    position: absolute;   
    width: 100%;
    height: 100%;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    display: flex;  
    justify-content: center;
    align-items: center;  
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
  #vueInputError{
    color:#630000;
  }
  #vueInteraction{
    height: 5%;
    width: 80%;
    display: flex;  
    justify-content: center;
    align-items: center;  
    text-align: center;
    gap: 10px;
    flex-direction: row;
    
  }
  #vueEnter{
    height:100%;
    border-radius: 5px;
    background-color: rgb(0, 180, 0);
  }
  #vueInput{
    height:100%;
    border-radius: 5px;
  }

  #vueMenu{
    font: italic 1.2rem "Fira Sans", serif;
    color: rgb(0, 0, 0);
    position: absolute;
    height: 8%;
    width: 100%; 
    background-color: #e9e5e5; 
    border-radius: 7px; 
    font-size: 150%;
  }

  hr{
    position: absolute;
    top:  9%;
    height: 2px;
    width: 100%;
  }

  #vuePlay{
    position: absolute;
    top: 10%;
    height: 87%;
    width: 100%;
  }

  #vueSide{
    position: absolute;
    top: 10%;
    height: 87%;
    width: 100%;
  }


</style>



