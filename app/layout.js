import "./globals.css";
import { Kanit } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/navbar/Navbar";

const myFont = Kanit({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Quiz App",
    template: "Quiz App | %s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
