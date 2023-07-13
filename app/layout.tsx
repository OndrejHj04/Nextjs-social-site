import React from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
import AuthProvider from "./auth/auth-provider";
import TopBar from "../components/TopBar";
import ComponentsWrapper from "../components/ComponentsWrapper";
const RootLayout = ({ children }: { children: any }) => {
  return (
    <html>
      <body>
        <AuthProvider>
          <Providers>
            <ComponentsWrapper>
              <TopBar />
            </ComponentsWrapper>
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
