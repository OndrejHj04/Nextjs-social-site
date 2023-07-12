import React from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
import AuthProvider from "./auth/auth-provider";
const RootLayout = ({ children }: { children: any }) => {
  return (
    <html>
      <body>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
