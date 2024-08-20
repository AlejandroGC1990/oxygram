import { useDispatch } from "react-redux";
import { openContactModal } from "../features/modals/modalSlice"; // Asegúrate de la ruta correcta
import iconMessage from "../assets/icon_message.png";
import "../styles/_nav.scss";

const Nav = () => {
  const dispatch = useDispatch();

  const handleMessageClick = () => {
    dispatch(openContactModal());
  };

  return (
    <div className="nav">
      <p className="nav__title">OXYgram</p>
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
