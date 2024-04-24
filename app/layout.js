import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/shared/Navbar";
import Footer from "@/src/shared/Footer";
import Session from "@/Context/Session";
import GlobalProvider from "./GlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Shop",
  description: "E-Shoes is your one-stop destination for all your footwear needs. Explore a vast collection of stylish and comfortable shoes for every occasion. From trendy sneakers to elegant dress shoes, find the perfect pair to complement your style. Enjoy a seamless online shopping experience with user-friendly navigation, secure checkout, and convenient order tracking. Step up your shoe game with E-Shoes today!",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <Session>
          <GlobalProvider>
            <div className="md:mx-16">
              <Navbar />
              <hr />
              {children}
              <hr />
              <Footer />
            </div>
          </GlobalProvider>
        </Session>
      </body>
    </html>
  );
}
