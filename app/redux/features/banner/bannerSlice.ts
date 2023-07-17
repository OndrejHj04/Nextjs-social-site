"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface BanerState {
  type: "alert" | "success";
  text: string;
  open: boolean;
}

const initialState: BanerState = {
  type: null,
  text: "",
  open: false,
};

export const bannerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      const { text, type } = payload;
      state.open = true;
      state.text = text;
      state.type = type;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = bannerSlice.actions;
export default bannerSlice.reducer;
