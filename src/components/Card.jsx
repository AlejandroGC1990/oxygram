import { useDispatch, useSelector } from "react-redux";
import iconHeart from "../assets/icon_heart.png";
import iconMessage from "../assets/icon_message.png";
import iconDownload from "../assets/icon_download.png";
import { addFav, removeFav } from "../features/favs/favsSlice";
import { downloadImageThunk } from "../features/imgs/imgsThunk";

const Card = ({ image }) => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.favs);
  const favorite = favs.some((fav) => fav.id === image.id);

  const handleFav = () => {
    if (favorite) {
      dispatch(removeFav(image));
    } else {
      dispatch(addFav(image));
    }
  };

  const handleDownload = () => {
    dispatch(downloadImageThunk(image.id));
  };

  return (
    <div className="card">
      <img src={image.urls.thumb} alt={image.description || "Image"} />
      <div className="card-content">
        <p>Photo by {image.user.name}</p>
        <img
          onClick={handleFav}
          src={iconHeart}
          alt={favorite ? "Remove from favorites" : "Add to favorites"}
        />
        <img src={iconMessage} alt="Send message" />
        <img onClick={handleDownload} src={iconDownload} alt="Download image" />

        {image.width && image.width >= 0 ? (
          <p>Width: {image.width} px</p>
        ) : (
          <p></p>
        )}
        {image.height && image.height >= 0 ? (
          <p>Height: {image.height} px</p>
        ) : (
          <p></p>
        )}
        {image.likes && image.likes >= 0 ? (
          <p>Likes: {image.likes}</p>
        ) : (
          <p></p>
        )}
        {image.tags && image.tags.lenght > 0 ? (
          image.tags.map((tag) => <p key={image.id}>{tag.title}</p>)
        ) : (
          <p></p>
        )}
        
      </div>
    </div>
  );
};

export default Card;
