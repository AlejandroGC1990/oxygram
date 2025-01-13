import { Link, useLocation } from "react-router-dom";
import icon_search_black from "../assets/icon_search_black.png";
import icon_user from "../assets/icon_user.png";
import icon_home from "../assets/icon_home.png";
import "../styles/Components/_footer.scss";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <div className={`footer ${darkMode ? "dark-mode" : ""}`}>
      <Link to="/search" className={`footer__link ${location.pathname === "/search" ? "active" : ""}`}>
        <img className="footer__icon" src={icon_search_black} alt="Search" />
      </Link>
      <Link to="/" className={`footer__link ${location.pathname === "/" ? "active" : ""}`}>
        <img className="footer__icon" src={icon_home} alt="Home" />
      </Link>
      <Link to="/profile" className={`footer__link ${location.pathname === "/profile" ? "active" : ""}`}>
        <img className="footer__icon" src={icon_user} alt="Profile" />
      </Link>
    </div>
  );
};

export default Footer;
