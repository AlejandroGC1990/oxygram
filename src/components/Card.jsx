import { useDispatch } from "react-redux";
import iconHeart from "../assets/icon_heart.png";
import iconMessage from "../assets/icon_message.png";
import iconDownload from "../assets/icon_download.png";
import { addFav } from "../features/favs/favsSlice";

const Card = ({ image }) => {
  const dispatch = useDispatch();

  const handleFav = () => {
    dispatch(addFav());
  };

  return (
    <div className="card">
      <img src={image.urls.thumb} alt={image.description || "Image"} />
      <div className="card-content">
        <p>Photo by {image.user.name}</p>
        <img onClick={handleFav} src={iconHeart} alt="Add to favorites" />
        <img src={iconMessage} alt="Send message" />
        <img src={iconDownload} alt="Download image" />
      </div>
    </div>
  );
};

export default Card;