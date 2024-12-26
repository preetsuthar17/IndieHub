import Footer from "./Footer";
import Header from "./Header";

import { Syne } from "next/font/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={`${syne.variable} font-[family-name:var(--font-syne)] min-h-screen`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
