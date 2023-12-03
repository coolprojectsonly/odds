import { createSlice } from "@reduxjs/toolkit";
import { getOdds } from "./action";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOdds.pending, (state) => {
        state.status === "loading";
      })
      .addCase(getOdds.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getOdds.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default createReducer;
