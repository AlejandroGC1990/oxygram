import icon_search_black from "../assets/icon_search_black.png";
import icon_user from "../assets/icon_user.png";
import icon_home from "../assets/icon_home.png";
import { Link } from "react-router-dom";
import "../styles/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/search">
        <img className="footer__icon" src={icon_search_black} alt="Search" />
      </Link>
      <Link to="/">
        <img className="footer__icon" src={icon_home} alt="Home" />
      </Link>
      <Link to="/profile">
        <img className="footer__icon" src={icon_user} alt="Profile" />
      </Link>
    </div>
  );
};

export default Footer;