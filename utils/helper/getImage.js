import { currentTempImg } from "../constants.js";

export const getImage = (imgCode, ele) => {
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
      ele.src = imgBlobUrl;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
};
