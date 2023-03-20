import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "../styles/global.css";
import style from "./style.module.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={style.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
