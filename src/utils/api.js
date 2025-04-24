import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "338ac68439mshc31191e73f8816fp10408cjsnf0fc7b37df18",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
