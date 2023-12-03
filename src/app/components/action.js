import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOdds = createAsyncThunk("/post/getodds", async () => {
  const options = {
    method: "GET",
    url: "https://odds.p.rapidapi.com/v4/sports/upcoming/odds",
    params: {
      regions: "us",
      oddsFormat: "decimal",
      markets: "h2h,spreads",
      dateFormat: "iso",
    },
    headers: {
      "X-RapidAPI-Key": "c1fd179e92mshf677d828559a3aep1a9fb9jsn19dac2ef030b",
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
