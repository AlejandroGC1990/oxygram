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
      <h1 className="slideBar__title">OXYgram</h1>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className={"slideBar__link"}
      >
        <img className="slideBar__link__icon" src={icon_home} alt="Home" />
        <p className={`${
          location.pathname === "/" ? "active" : ""
        }`}>For you</p>
      </Link>
      <Link
        to="/search"
        className={"slideBar__link"}
      >
        <img className="slideBar__link__icon" src={icon_search_black} alt="Search" />
        <p className={`${
          location.pathname === "/search" ? "active" : ""
        }`}>Search</p>
      </Link>
      <Link
        to="/profile"
        className={`slideBar__link ${
          location.pathname === "/profile" ? "active" : ""
        }`}
      >
        <img className="slideBar__link__icon" style={{ padding: `0em 0.4em`}} src={icon_user} alt="Profile" />
        <p className={`${
          location.pathname === "/profile" ? "active" : ""
        }`}>Profile</p>
      </Link>
      <div className="slideBar__link">
        <img
          className="slideBar__link__icon"
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
