import { currentTempImg } from "../constants.js";

export const getImage = (data) => {
  let imgCode = data.weather[0].icon;
  const imgURL = `https://openweathermap.org/img/wn/${imgCode}@4x.png`;
  fetch(imgURL)
    .then((Response) => {
      if (Response) {
        return Response.blob();
      } else {
        throw new Error("Enter correct Place");
      }
    })
    .then((imgBlob) => {
      const imgBlobUrl = URL.createObjectURL(imgBlob);
      currentTempImg.src = imgBlobUrl;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
};
