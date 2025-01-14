import { useEffect } from "react";
import Card from "./Card";
import "../styles/Components/_modalCard.scss";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ image, onClose }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className={`modal-container ${darkMode ? "dark-mode" : ""}`}
      onClick={onClose}
      >
      <button className="modal-container__close" onClick={onClose}>
        X
      </button>
      <div
        className={`modal-container__card ${darkMode ? "dark-mode" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Card key={image.id} image={image} />
      </div>
    </div>
  );
};

export default Modal;
