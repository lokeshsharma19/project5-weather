// ###########importing

import {
  airPressure,
  currentTempValue,
  currentWeather,
  degCelsius,
  humidity,
  visibility,
  currentDate,
  windSpeed,
  currentPlace,
} from "../constants.js";
import { getImage } from "./getImage.js";

// ########functionality
export const showWeather = (data, inCelsius) => {
  const newDate = new Date();
  let todayDate = newDate.getDate();
  let currentDay = newDate.getDay();
  let currentMonth = newDate.getMonth();
  currentTempValue.textContent = data.main.temp;
  if (inCelsius) {
    degCelsius.textContent = "℃";
  } else {
    degCelsius.textContent = "℉";
  }
  currentWeather.textContent = data.weather[0].main;
  console.log(currentDate, currentDay, currentMonth);
  console.log(currentDate);
  currentDate.textContent = `${currentDay},${todayDate}/${currentMonth}`;
  currentPlace.textContent = data.name;
  airPressure.textContent = data.main.pressure;
  humidity.textContent = data.main.humidity;
  visibility.textContent = data.visibility;
  windSpeed.textContent = data.wind.speed;
  getImage(data);
};
