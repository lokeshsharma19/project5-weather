// #########importing

import { longLat } from "./longLat.js";
import { getWeather } from "./getWeather.js";
import { localStorageWork } from "../lib/localStorageWork.js";
// #########functions
export const currentLocation = (e) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude, true);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
export const searchedLocation = (location) => {
  localStorageWork(location);
  longLat(location, true);
};

// ##########requirement functions
// function showPosition(position) {
// myLocationParameters.currLatitude = position.coords.latitude;
// myLocationParameters.currLongitude = position.coords.longitude;
// }
