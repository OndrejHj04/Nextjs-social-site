"use client";
import React, { Children } from "react";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";
import ComponentsWrapper from "./ComponentsWrapper";
import TopBar from "../components/TopBar";
import { StyledEngineProvider } from "@mui/material";
import AuthProvider from "./auth-provider";
import Banner from "../components/Banner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <AuthProvider>
          <TopBar />
          {children}
          <Banner />
        </AuthProvider>
      </StyledEngineProvider>
    </Provider>
  );
}
