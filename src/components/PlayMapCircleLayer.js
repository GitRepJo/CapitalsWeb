
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {Circle} from 'ol/geom.js';
import {Style} from 'ol/style.js';
import Feature from 'ol/Feature.js';

export function useCircleLayer() {
      
    let circleFeature = new Feature({
        geometry: new Circle([0,0], 20),
      })
    
      let circleSource = new VectorSource({
        features: [circleFeature],
      })
      
      let circleVector = new VectorLayer({
        source: circleSource,
      })
      
      circleFeature.setId("circ")

      circleFeature.setStyle(
        new Style({
          renderer(coordinates, state) {
            const [[x, y], [x1, y1]] = coordinates;
            const ctx = state.context;
            const dx = x1 - x;
            const dy = y1 - y;
            const radius = Math.sqrt(dx * dx + dy * dy);
    
            const innerRadius = 0;
            const outerRadius = radius * 1.4;
    
            const gradient = ctx.createRadialGradient(
              x,
              y,
              innerRadius,
              x,
              y,
              outerRadius,
            );
    
            gradient.addColorStop(0.015, 'rgba(255,255,255,0.5)');
            gradient.addColorStop(0.015, 'rgba(255,255,255,0.0)');
            gradient.addColorStop(0.4, 'rgba(255,255,255,0.2)');
            gradient.addColorStop(1, 'rgba(255,255,255,0.5)');
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.stroke();
          },
        })
      )
  return circleVector
}