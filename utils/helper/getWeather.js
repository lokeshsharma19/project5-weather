import { apiKey } from "../constants.js";
import { showWeather } from "./showWeather.js";

export const getWeather = (lat, long, inCelsius) => {
  const weatherUrlCel = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  const weatherUrlFar = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
  if (inCelsius) {
    fetch(weatherUrlCel)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        showWeather(data, true);
      });
  } else {
    fetch(weatherUrlFar)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        showWeather(data, false);
      });
  }
};
