import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
  
export function useDrawLayer() {
  
  const source = new VectorSource({wrapX: false});

  const drawLayer = new VectorLayer({
    source: source,
    style: {
      'fill-color': 'rgba(255, 255, 255, 0.2)',
      'stroke-color': 'rgba(255, 255, 255, 0.7)',
      'stroke-width': 2,
      'circle-radius': 5,
      'circle-fill-color': 'rgba(255, 255, 255, 0.7)',
    },
  });
   
  return drawLayer
}