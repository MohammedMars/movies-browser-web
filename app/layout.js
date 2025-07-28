import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "./Context/FavoritesContext";
import Topbar from './Components/TopBar/Topbar';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Browser",
  description: "Find your favorite movies instantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="site-background"></div>

        <FavoritesProvider>
          <Topbar />
          {children}
        </FavoritesProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
