
import csv from '@/assets/test.csv'

/**
* Parse random list entry from csv with row Latitude, Longitude, Hauptstadt and Land
* @return {Number, Number, String, String} lat, lon, cap, cou 
*/
export function useRandCap() {
      
  let randomNumber = Math.floor(Math.random() * csv.length);
  let randomCapital = csv[randomNumber];
  
  let lat = Number(randomCapital[" Latitude"])
  let lon = Number(randomCapital[" Longitude"])
  let cap = randomCapital[" Hauptstadt"]
  let cou = randomCapital["Land"]
  
  return{lat, lon, cap, cou}
}