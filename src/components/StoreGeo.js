// store.js
import { reactive } from 'vue'

export const geo = reactive({ 

  couEntry : "",
  capEntry : "",
  lonEntry : null,
  latEntry : null,
  /**
  * Set a new location entry
  * @param {String} cou
  * @param {String} cap
  * @param {Number} lon
  * @param {Number} lat
  */
  setEntry(cou, cap, lon, lat){ 
    this.couEntry = cou
    this.capEntry = cap
    this.lonEntry = lon
    this.latEntry = lat
  },
})
 