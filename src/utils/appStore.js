import React from "react";
import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

//building store because whenever use sign in or sign up we should locally store the user info & when user logged out we should delete the info.
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
