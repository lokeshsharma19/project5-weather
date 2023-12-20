// #######import
import {
  myLocation,
  searchPlaces,
  crossBtn,
  locationInput,
  searchForm,
  celsius,
  farenheit,
  celBtn,
  farBtn,
  savedPlaces,
  savedPlace,
} from "./utils/constants.js";
import { crossHandle, searchHandle } from "./utils/helper/searchBtn.js";
import {
  currentLocation,
  searchedLocation,
} from "./utils/helper/locationFinder.js";
import { getWeather } from "./utils/helper/getWeather.js";
import { longLat } from "./utils/helper/longLat.js";
import { loadOldWeather } from "./utils/lib/localStorageWork.js";
import { savedPlaceLoad } from "./utils/helper/savedPlaceLoad.js";

// ###########{constants}
let tempSearch;
if (!tempSearch) {
  tempSearch = JSON.parse(localStorage.getItem("searches"))[0] || [];
}
// ######## functioning

searchPlaces.addEventListener("click", (e) => {
  searchHandle(e);
});
crossBtn.addEventListener("click", (e) => {
  crossHandle(e);
});
// locationInput.addEventListener("click", (e) => {
//   handleSearchPlaces(e);
// });

myLocation.addEventListener("click", (e) => {
  currentLocation(e);
});
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  tempSearch = locationInput.value.trim();
  searchedLocation(tempSearch);
  locationInput.value = "";
  crossHandle();
  savedPlaceLoad();
});
celBtn.addEventListener("click", () => {
  longLat(tempSearch, true);
  celBtn.style.backgroundColor = "white";
  celsius.style.color = "#110e3c";
  farBtn.style.backgroundColor = "#585676";
  farenheit.style.color = "#e7e7eb";
});
farBtn.addEventListener("click", () => {
  longLat(tempSearch, false);
  farBtn.style.backgroundColor = "white";
  farenheit.style.color = "#110e3c";
  celBtn.style.backgroundColor = "#585676";
  celsius.style.color = "#e7e7eb";
});

document.addEventListener("DOMContentLoaded", () => {
  loadOldWeather();
});

savedPlace.forEach((place) => {
  place.addEventListener("click", () => {
    searchedLocation(place.textContent);
    crossHandle();
  });
});
