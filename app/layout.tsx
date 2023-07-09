import "./globals.css";
import { Providers } from "./redux/provider";
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
