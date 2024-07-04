import 'ol/ol.css'
import ImageLayer from 'ol/layer/Image.js';
import Projection from 'ol/proj/Projection.js';
import Static from 'ol/source/ImageStatic.js';
 
export function useMapLayer() {
  
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

  let mapSource = new Static({
    url: "https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.jpg",
    // url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1280px-Equirectangular_projection_SW.jpg",
    projection: projection,
    imageExtent: extent,
  })

  let layer = new ImageLayer({
    source: mapSource
  })

  return {layer, projection}
}