"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  modal: boolean;
}

const initialState: CounterState = {
  modal: false,
};

export const topBarSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
});

export const { openModal, closeModal } = topBarSlice.actions;
export default topBarSlice.reducer;
