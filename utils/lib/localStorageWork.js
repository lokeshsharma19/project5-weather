import { longLat } from "../helper/longLat.js";
import { savedPlaceLoad } from "../helper/savedPlaceLoad.js";

export const localStorageWork = (location) => {
  const oldSearches = JSON.parse(localStorage.getItem("searches")) || [];
  oldSearches[0] = oldSearches[1];
  oldSearches[1] = oldSearches[2];
  oldSearches[2] = location;
  localStorage.setItem("searches", JSON.stringify(oldSearches));
};

export const loadOldWeather = () => {
  const oldSearches = JSON.parse(localStorage.getItem("searches")) || [];
  if (oldSearches.length == 0) {
    oldSearches[0] = "Pune";
    oldSearches[1] = "Mumbai";
    oldSearches[2] = "Delhi";
    localStorage.setItem("searches", JSON.stringify(oldSearches));
  }
  longLat(oldSearches[2], true);
  savedPlaceLoad();
};
