import { useEffect } from "react"
import Card from "./Card";

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
        <div onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>X</button>
                <Card key={image.id} image={image} />
            </div>
        </div>
    )
}

export default Modal;