<template>
  <div id="playMap"></div>
</template>

<script setup>
  import { ref, onMounted, watch} from 'vue';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import Draw  from 'ol/interaction/Draw'
  import 'ol/ol.css'
  import Projection from 'ol/proj/Projection.js';
  import {Circle} from 'ol/geom.js';
  import {useCircleLayer} from './PlayMapCircleLayer';
  import {useMapLayer} from './PlayMapMapLayer';
  import {useDrawLayer} from './PlayMapDrawLayer';
  import {state} from "./StoreState.js"
  import {geo} from "./StoreGeo.js"

  const mapComp = ref(null);
  
  const emit = defineEmits("posUser", 2, 2)

  let circleLayer1 = useCircleLayer()
  let drawLayer = useDrawLayer()
  let map = useMapLayer()

  let pointUser = ref(0)
  let mapInstance = null

  let minLon = -180
  let minLat = -90
  let maxLon =  180
  let maxLat = 90

  const extent = [minLon, minLat, maxLon, maxLat];
  const projection = new Projection({
    code: 'EPSG: 4326',
    units: 'pixels',
    extent: extent,
  });
  
  let draw = new Draw({
    source: drawLayer.getSource(),
    type: 'Point',
  })

  // Map actions in question state
  watch(
  () => state.questionState, // First callback is triggered by vue to collect dependencies
  () => { // Second callback is triggered on dependency change
    if (mapInstance != null){
      if (state.questionState){ 
        mapInstance.addInteraction(draw);   // Drawing only possible during question state
        
        if (drawLayer.getSource().getFeatures() != null){
          drawLayer.getSource().clear() // Remove old user point
        }
        emit("posUser", null, null) // Default position guess
      }
      else{ mapInstance.removeInteraction(draw); }
    }
  })

  // Map actions during answer state
  watch(
  () => state, // First callback is triggered by vue to collect dependencies
  () => { // Second callback is triggered on dependency change
    if (mapInstance != null){
      if (state.answerState || state.endState){
        // Draw circle at current capital location
        let custCircle = new Circle([geo.lonEntry,geo.latEntry], 20)
        circleLayer1.getSource().getFeatureById("circ").setGeometry(custCircle)
        mapInstance.addLayer(circleLayer1)
      }
      else{ mapInstance.removeLayer(circleLayer1)}
    }
  },{deep:true})

  onMounted(() => {

    mapInstance = new Map({
      target: 'playMap',
      layers: [
          map.layer,
          drawLayer,
        ],
        view: new View({
          projection: map.projection,
          center: [0, 0, 0, 0],
          extent: [-185,-95,185,95], 
          smoothExtentConstraint: true,
          zoom: 3.01,
          maxZoom: 6,
        }),
    });
    
    mapComp.value = mapInstance;
    
    let clickedPoint = [0,0] // Coordinates on map that are clicked
    
    drawLayer.getSource().on("change", function (event){
       // Get the point coordinates the user clicked on
      let drawFeature = event.target.getFeatures()
      
      if (drawFeature.length != 0){

        let singleFeature = drawFeature.at(-1) // Take last drawn feature
        pointUser.value = singleFeature.getGeometry().getCoordinates()
              
        // Take clicked point only if coordinates of old and new click differ
        if ((pointUser.value[0] != clickedPoint[0]) & (pointUser.value[1] != clickedPoint[1])){
          clickedPoint = pointUser.value
          emit("posUser", pointUser.value[0], pointUser.value[1])
        }
        // If more then one point on map, remove the last one
        if (drawFeature.length > 1) {
          drawLayer.getSource().removeFeature(drawFeature[0])
        }
      }
    })   
  });

</script>


<style>
#playMap{
  width: 100%;
  height: 100%;
}
</style>
