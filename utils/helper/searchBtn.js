// #########importing
import { savedPlaces, searching } from "../constants.js";
// ########functioning

export const searchHandle = (e) => {
  searching.style.transform = "translateX(0%)";
};
export const crossHandle = (e) => {
  searching.style.transform = "translateX(-110%)";
};
