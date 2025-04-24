import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const params = {
    bl_lat: "34.457121",
    bl_lng: "24.609666",
    tr_lat: "43.610013",
    tr_lng: "46.791334",
    speed: "2,99999",
  };
  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  return formatted;
});

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  async (flightId) => {
    //parametreleri belirle

    const params = {
      flight: flightId,
    };

    //api isteği at
    const res = await api.get("/flights/detail", { params });

    console.log(res);

    return res.data;
  }
);
