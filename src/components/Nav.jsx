import { useDispatch, useSelector } from "react-redux";
import { openContactModal } from "../features/modals/modalSlice";
import iconMessage from "../assets/messages_blue.png";
import icon_sunny from "../assets/sunny.png";
import icon_moon from "../assets/moon.png";
import "../styles/Components/_nav.scss";
import { toggleTheme } from "../features/darkThemeSlice/themeSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleMessageClick = () => {
    dispatch(openContactModal());
  };

  return (
    <div className={`nav ${darkMode ? "dark-mode" : ""}`}>
      <p className="nav__title">OXYgram</p>
        <img
        onClick={() => dispatch(toggleTheme())}
          src={darkMode ? icon_sunny : icon_moon}
          alt={darkMode ? "Modo Claro" : "Modo Oscuro"}
          className="theme-toggle-icon"
        />

      <img
        className="nav__icon_message"
        src={iconMessage}
        alt="Contact"
        onClick={handleMessageClick}
      />
    </div>
  );
};

export default Nav;
