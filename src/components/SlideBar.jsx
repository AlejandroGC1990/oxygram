import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openContactModal } from "../features/modals/modalSlice";
import iconMessage from "../assets/icon_message.png";
import icon_search_black from "../assets/icon_search_black.png";
import icon_user from "../assets/icon_user.png";
import icon_home from "../assets/icon_home.png";
import "../styles/Components/_slideBar.scss";

const Slidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleMessageClick = () => {
    dispatch(openContactModal());
  };
  return (
    <div className="slideBar">
      <p className="slideBar__title">OXYgram</p>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className={`slideBar__link ${location.pathname === "/" ? "active" : ""}`}
      >
        <img className="slideBar__icon" src={icon_home} alt="Home" />
        <p>For you</p>
      </Link>
      <Link
        to="/search"
        className={`slideBar__link ${
          location.pathname === "/search" ? "active" : ""
        }`}
      >
        <img className="slideBar__icon" src={icon_search_black} alt="Search" />
        <p>Search</p>
      </Link>
      <Link
        to="/profile"
        className={`slideBar__link ${
          location.pathname === "/profile" ? "active" : ""
        }`}
      >
        <img className="slideBar__icon" style={{ padding: `0em 0.4em`}} src={icon_user} alt="Profile" />
        <p>Profile</p>
      </Link>
      <div className="slideBar__message">
        <img
          className="slideBar__icon"
          src={iconMessage}
          alt="Contact"
          onClick={handleMessageClick}
        />
        <p>Message</p>
      </div>
    </div>
  );
};

export default Slidebar;
