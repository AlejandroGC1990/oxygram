import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Slidebar from "./SlideBar";
import "../styles/_main.scss";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode"); // Aplicar la clase dark-mode al body
    } else {
      document.body.classList.remove("dark-mode"); // Eliminar la clase dark-mode del body
    }
  }, [darkMode]);

  return (
    <div className={`layout ${darkMode ? "dark-mode" : ""}`}>
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
