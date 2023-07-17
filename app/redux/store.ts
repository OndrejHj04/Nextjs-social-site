"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/couter/couterSlice";
import topBarReducer from "./features/topBar/topBarSlice";
import bannerSlice from "./features/banner/bannerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    topBar: topBarReducer,
    banner: bannerSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
