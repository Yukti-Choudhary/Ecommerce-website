import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const productSlice = createSlice({
  name: "filter",
  initialState: {
    filteredProducts: storeData,
    singledProduct: storeData,
    error: false,
  },
  reducers: {
    filterProducts: (state, action) => {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.error = false;
        state.filteredProducts = filter;
      } catch (error) {
        return error;
      }
    },
    singleProduct: (state, action) => {
      try {
        const single = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singledProduct = single;
      } catch (error) {
        return error;
      }
    },
    filterGender: (state, action) => {
      try {
        const gender = storeData.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        if (gender.length > 0) {
          state.error = false;
          state.filteredProducts = gender;
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    filterColor: (state, action) => {
      try {
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = color;
        if (color.length > 0) {
          state.error = false;
          state.filteredProducts = color;
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    filterSize: (state, action) => {
      try {
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = size;
        if (size.length > 0) {
          state.error = false;
          state.filteredProducts = size;
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    sortByPrice: (state) => {
      try {
        const sort = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.error = false;
        state.filteredProducts = sort;
        if (sort.length > 1) {
          state.error = false;
          state.filteredProducts = sort;
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterColor,
  sortByPrice,
  filterSize,
  filterGender,
} = productSlice.actions;

export default productSlice.reducer;
