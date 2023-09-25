import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
};

const navSlice = createSlice({
  name: "navList",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleMenu } = navSlice.actions;
export default navSlice.reducer;
