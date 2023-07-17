import React from "react";
import "./globals.css";
import { Providers } from "../providers/provider";
import AuthProvider from "../providers/auth-provider";

import { StyledEngineProvider } from "@mui/material";
import TopBar from "../components/TopBar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const RootLayout = ({ children }: { children: any }) => {
  return (
    <html>
      <body id="root">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
