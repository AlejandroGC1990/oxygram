import { useEffect } from "react"
import Card from "./Card";
import "../styles/Components/_modalCard.scss";

const Modal = ({image, onClose}) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        }
        
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return(
        <div className="modal-container" onClick={onClose}>
                <button className="modal-container__close" onClick={onClose}>X</button>
            <div className="modal-container__card" onClick={(e) => e.stopPropagation()}>
                <Card key={image.id} image={image} />
            </div>
        </div>
    )
}

export default Modal;