import React from "react";
import "./globals.css";
import { Providers } from "../providers/provider";
import AuthProvider from "../providers/auth-provider";
import TopBar from "../components/TopBar";
import ComponentsWrapper from "../providers/ComponentsWrapper";
import { StyledEngineProvider } from "@mui/material";
const RootLayout = ({ children }: { children: any }) => {
  return (
    <html>
      <body id="root">
        <StyledEngineProvider injectFirst>
          <AuthProvider>
            <Providers>{children}</Providers>
          </AuthProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
