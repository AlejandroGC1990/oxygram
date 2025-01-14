import { useDispatch, useSelector } from 'react-redux';
import { closeContactModal } from '../features/modals/modalSlice'; 
import icon_linkedin from '../assets/icon_linkedin.jpg'; 
import '../styles/Components/_modalContact.scss';

const ContactModal = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);


  const handleClose = () => {
    dispatch(closeContactModal());
  };

  return (
    <div className="contact-modal">
      <div className={`contact-modal__content ${darkMode ? "dark-mode" : ""}`}>
        <button className="contact-modal__content__close" onClick={handleClose}>X</button>
        <div className="contact-modal__content__pack">
          <img
            className="contact-modal__content__pack__icon"
            src={icon_linkedin}
            alt="LinkedIn"
          />
          <a
            target="_blank"
            className="contact-modal__content__pack__text"
            href="https://www.linkedin.com/in/alejandrogarciacarmona/"
            rel="noopener noreferrer"
          >
            Alejandro G.C.
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
