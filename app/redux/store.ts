"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/couter/couterSlice";
import topBarReducer from "./features/topBar/topBarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    topBar: topBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
