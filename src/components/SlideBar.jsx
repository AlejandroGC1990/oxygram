import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openContactModal } from "../features/modals/modalSlice";
import iconMessage from "../assets/messages_blue.png";
import icon_search_black from "../assets/search_blue.png";
import icon_user from "../assets/user_blue.png";
import icon_home from "../assets/home_blue.png";
import icon_sunny from "../assets/sunny.png";
import icon_moon from "../assets/moon.png";
import "../styles/Components/_slideBar.scss";
import { toggleTheme } from "../features/darkThemeSlice/themeSlice";
import { useEffect } from "react";

const Slidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleMessageClick = () => {
    dispatch(openContactModal());
  };

  return (
    <div className={`slideBar ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="slideBar__title">OXYgram</h1>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className={"slideBar__link"}
      >
        <img className="slideBar__link__icon" src={icon_home} alt="Home" />
        <p className={`${location.pathname === "/" ? "active" : ""}`}>
          For you
        </p>
      </Link>
      <Link to="/search" className={"slideBar__link"}>
        <img
          className="slideBar__link__icon"
          src={icon_search_black}
          alt="Search"
        />
        <p className={`${location.pathname === "/search" ? "active" : ""}`}>
          Search
        </p>
      </Link>
      <Link
        to="/profile"
        className={`slideBar__link ${
          location.pathname === "/profile" ? "active" : ""
        }`}
      >
        <img className="slideBar__link__icon" src={icon_user} alt="Profile" />
        <p className={`${location.pathname === "/profile" ? "active" : ""}`}>
          Profile
        </p>
      </Link>
      <div className="slideBar__link" onClick={handleMessageClick}>
        <img className="slideBar__link__icon" src={iconMessage} alt="Contact" />
        <p>Message</p>
      </div>
      <div className="slideBar__link" onClick={() => dispatch(toggleTheme())}>
        <img
          src={darkMode ? icon_sunny : icon_moon}
          alt={darkMode ? "Modo Claro" : "Modo Oscuro"}
          className="theme-toggle-icon"
        />
        <p>Theme</p>
      </div>
      {/* </button> */}
    </div>
  );
};

export default Slidebar;
