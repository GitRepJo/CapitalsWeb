
<template>
  <div id ="playSideMenu" >
    <p id="playSideMenuTitle">Info</p>
    
    <p id="playSideMenuText">Errate die Position von Hauptstädten auf der Weltkarte.
      Markiere die Haupstadt auf der Karte möglichst genau. Nutze die Schaltfläche unten 
      um die Entfernung der Hauptstadt zu Deinem Marker zu erfahren und fortzufahren.
      Ohne Eingabe wird nach Ablauf von 20 Sekunden die nächste Frage vorgestellt.
    </p>
    <p id="playSideMenuText">
      Umrechnungen von sphärischen Bildmaterialkoordinaten zu Entfernung in Längenbasiseinheit (Meter) 
      erfolgen mit der Haversine Formel.
    </p>
    
    <p id="playSideMenuTitle">Lizenz</p>
    
   
    
    <p id="playSideMenuText"> 
      Kartenmaterial wird zur Verfügung gestellt von: 
    </p> 

    <a id="playSideMenuUrl" 
      href="https://visibleearth.nasa.gov/collection/1484/blue-marble">
      https://visibleearth.nasa.gov/collection/1484/blue-marble </a>
    
    <p id="playSideMenuText">
      Für die Darstellung der Karte und geographische Umrechnungen wird genutzt:
    </p>

    <a id="playSideMenuUrl"  href="https://openlayers.org/"> https://openlayers.org/ </a>
    
    <p id="playSideMenuText">
      Diese Webapp ist mit Vue3 umgesetzt: 
    </p>

    <a id="playSideMenuUrl" href="https://vuejs.org/">https://vuejs.org/ </a>
 

  </div> 
</template>

<script setup>
</script>

<style>
  #playSideMenu{
    position: absolute; 
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center; 
    gap: 5px;
    overflow: scroll;
    border-top-right-radius: 15px;
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
#playSideMenuUrl{
  font-size: 100%;
  left: 12px;
  width: 90%;
  color:black;
}

</style>