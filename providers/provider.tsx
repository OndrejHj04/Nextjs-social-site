"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";
import ComponentsWrapper from "./ComponentsWrapper";
import TopBar from "../components/TopBar";

export function Providers({ children }: { children: any }) {
  return (
    <Provider store={store}>
      <TopBar />
      {children}
    </Provider>
  );
}
