import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
