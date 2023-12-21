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
  days,
  currentTempImg,
} from "../constants.js";
import { getImage } from "./getImage.js";

// ########functionality
export const showWeather = (data, inCelsius) => {
  let newDate = new Date();
  let todayDate = newDate.getDate();
  let currentDay = newDate.getDay();
  let currentMonth = newDate.getMonth();
  const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  currentTempValue.textContent = data.list[0].main.temp;
  if (inCelsius) {
    degCelsius.textContent = "℃";
  } else {
    degCelsius.textContent = "℉";
  }
  currentWeather.textContent = data.list[0].weather[0].main;
  currentDate.textContent =
    dayArr[newDate.getDay()] +
    "," +
    newDate.getDate() +
    " " +
    monthArr[newDate.getMonth()];
  currentPlace.textContent = data.city.name;
  airPressure.textContent = data.list[0].main.pressure;
  humidity.textContent = data.list[0].main.humidity;
  visibility.textContent = data.list[0].visibility;
  windSpeed.textContent = data.list[0].wind.speed;

  let imgCode = data.list[0].weather[0].icon;

  getImage(imgCode, currentTempImg);
  let i = 0;
  console.log(days);
  days.forEach((day) => {
    // ######{tempConstant}
    let newDate = new Date(data.list[i + 1].dt * 1000);
    let tempMax = data.list[i + 1].main.temp_max;
    let tempMin = data.list[i + 1].main.temp_min;

    // #######{changeHtml}
    // #####{date handling}
    day.childNodes[1].textContent =
      dayArr[newDate.getDay()] +
      "," +
      newDate.getDate() +
      " " +
      monthArr[newDate.getMonth()];

    // ##########
    imgCode = data.list[i + 1].weather[0].icon;
    getImage(imgCode, day.childNodes[3]);

    // ##########

    day.childNodes[5].textContent = tempMax;
    day.childNodes[7].textContent = tempMin;
    i = i + 8;
  });
};
