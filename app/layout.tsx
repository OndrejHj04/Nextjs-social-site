import React from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
        <p>
          <div>
            adfas<h1>asdfas</h1>
          </div>
        </p>
      </body>
    </html>
  );
};

export default RootLayout;
