
/**
* Take a distance input in km and turn it into percentage 
* @param {Number} distance
* @return {Number} percentage
*/
export function useToPercentage(distance) {
  
  let percentage = 0
  
  if (distance == null){
    
    percentage = 0
    return percentage
  }
  else{

    let fullPercent = 100
    let zeroPercent = 1500
    let m = -(fullPercent/zeroPercent)
    let b = (fullPercent/zeroPercent) + 100

    //Set average to percent, 100% is 100 km on average, 0% is below 1500 on average
    //Formula is derived from the two points above (m*x +b)
    let rawPercentage = Math.round((m * distance + b))
    
    
    if (rawPercentage > 100){percentage = 100}
    else if (rawPercentage < 0) {percentage = 0}
    else  {percentage = rawPercentage}

    return percentage
  }
}