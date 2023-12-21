import { apiKey } from "../constants.js";
// import { fiveDaysWeather } from "./5DaysWeather.js";
import { getWeather } from "./getWeather.js";

export const longLat = (location, inCelsius) => {
  console.log(location);
  const locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
  fetch(locationUrl)
    .then((Response) => {
      if (Response) {
        return Response.json();
      } else {
        throw new Error("Enter correct Place");
      }
    })
    .then((data) => {
      getWeather(data[0].lat, data[0].lon, inCelsius);
      // fiveDaysWeather(data[0].lat, data[0].lon, inCelsius);
    })
    .catch((error) => {
      alert(error);
    });
};
