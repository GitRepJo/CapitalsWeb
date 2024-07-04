
/**
* Calculate distance in kilometer between two spherical Lat Lon variables.
* Returns null if any input is null
* @param {Number} lat1 
* @param {Number} lon1 
* @param {Number} lat2
* @param {Number} lon2 
* @return {Number} - distance between coordinates in km  
  */
export function useLatLonDiff(lat1, lon1, lat2, lon2) {

  if (lat1 == null || lon1 == null || lat2 == null || lon2 == null){ return null}
  else{
    // Haversine formula
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
    
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    const dMeter= R * c; // in m// Distance of two input points in meters
    const dKm =  dMeter/1000 // in km
  
    return dKm
  }
}