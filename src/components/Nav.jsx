import { useDispatch, useSelector } from "react-redux";
import { openContactModal } from "../features/modals/modalSlice";
import iconMessage from "../assets/icon_message.png";
import "../styles/Components/_nav.scss";
import { toggleTheme } from "../features/darkThemeSlice/themeSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleMessageClick = () => {
    dispatch(openContactModal());
  };

  return (
    <div className="nav">
      <p className="nav__title">OXYgram</p>
      <button 
      onClick={() => dispatch(toggleTheme())}
      className="theme-toggle-button"
      >
        {darkMode ? "Modo claro" : "Modo oscuro"}
      </button>

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
