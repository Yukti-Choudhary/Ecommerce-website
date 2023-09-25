import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import navSlice from "./slices/navSlice";

const store = configureStore({
  reducer: {
    slider: sliderSlice,
    filter: productSlice,
    cart: cartSlice,
    user: authSlice,
    nav: navSlice,
  },
});

export default store;
