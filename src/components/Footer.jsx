import icon_search_black from "../assets/icon_search_black.png";
import icon_user from "../assets/icon_user.png";
import icon_home from "../assets/icon_home.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Link to="/search">
        <img src={icon_search_black} alt="Search" />
      </Link>
      <Link to="/">
        <img src={icon_home} alt="Home" />
      </Link>
      <Link to="/search">
        <img src={icon_user} alt="Profile" />
      </Link>
    </div>
  );
};

export default Footer;