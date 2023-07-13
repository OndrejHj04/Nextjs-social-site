import React from "react";
import "./globals.css";
import { Providers } from "../providers/provider";
import AuthProvider from "../providers/auth-provider";
import TopBar from "../components/TopBar";
import ComponentsWrapper from "../providers/ComponentsWrapper";
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
