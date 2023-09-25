import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "login",
  initialState: {
    user:  {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    loggedIn: (state, action) => {
      const userId = action.payload;
      const userValidation = /^[a-zA-z{4,10}]$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*()+-_=]){4,10}$/.test(
          userId.password
        );
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
      }
      // const saveData = JSON.stringify(userId);
      // sessionStorage.setItem("authUser", saveData);
      // JSON.parse(sessionStorage.getItem("authUser")) ||
    },
    loggedOut: (state) => {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
