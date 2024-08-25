import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Slidebar from "./SlideBar";
import "../styles/_main.scss";

const Layout = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout">
      {isDesktop ? <Slidebar /> : <Nav />}
      <div className="layout__content">
        <main className="layout__content__main">
          <Outlet />
        </main>
      </div>
      {!isDesktop && <Footer />}
    </div>
  );
};

export default Layout;
