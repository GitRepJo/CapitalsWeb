
<template>
  <div id ="sideTop" >
    
    <p id="playSideMenuTitle">Rangliste</p>
  
    <table>
      <thead>
          <tr>
            <th>Rang</th>
            <th>Name</th>
            <th>Punkte</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(score,index) in scores">
            <td>{{index +1}}</td>
            <td>{{score.username}}</td>
            <td>{{score.percent}}</td>
            <td>{{score.date}}</td>
          </tr>
        </tbody>
      </table>
      
  </div> 
</template>

<script setup>
import {supabase} from '../lib/supabaseClient.js'
import {ref} from "vue"

const scores = ref([])

async function getScores() {
  const { data } = await supabase.from('Score').
    select()
    .order('id', { ascending: false })
    .limit(99)
  scores.value = data
  scores.value.sort((a,b) => (parseFloat(b.percent)- parseFloat(a.percent)))
}

getScores()
</script>

<style>
  #sideTop{
    position: absolute; 
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center; 
    gap: 5px;
    overflow: scroll;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: rgb(255, 255, 255); 
  }

#playSideMenuTitle{
  font-size: 200%;
}
#playSideMenuText{
  font-size: 100%;
  left: 12px;
  width: 90%;
}


</style>