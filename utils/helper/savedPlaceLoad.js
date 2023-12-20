import { savedPlace } from "../constants.js";

export const savedPlaceLoad = () => {
  const oldSearches = JSON.parse(localStorage.getItem("searches")) || [];
  let i = 2;
  savedPlace.forEach((place) => {
    place.textContent = oldSearches[i];
    i--;
  });
};
