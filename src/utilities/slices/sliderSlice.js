import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: 4,
  },
  reducers: {
    nextSlide: (state, action) => {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide: (state, action) => {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
  },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
