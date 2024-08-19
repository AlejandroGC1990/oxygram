import iconMessage from "../assets/icon_message.png";
import "../styles/_nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <p className="nav__title">OXYgram</p>
      <img className="nav__icon_message" src={iconMessage} />
    </div>
  );
};

export default Nav;
