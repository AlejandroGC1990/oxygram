// components/Card.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../features/favs/favsSlice";
import { downloadImageThunk } from "../features/imgs/imgsThunk";
import { openModal, removeComment } from "../features/comments/commentsSlice";
import CommentModal from "./ModalComment";
import iconHeart from "../assets/icon_heart.png";
import iconMessage from "../assets/icon_message.png";
import iconDownload from "../assets/icon_download.png";
import iconComment from "../assets/icon_comment.png";
import '../styles/Components/_card.scss';

const Card = ({ image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favs = useSelector((state) => state.favs.favs);
  const comments = useSelector((state) => state.comments.comments);
  const { visible, imageId } = useSelector((state) => state.comments.modal);

  const favorite = favs.some((fav) => fav.id === image.id);
  const comment = comments[image.id] || "";

  const handleFav = () => {
    if (favorite) {
      dispatch(removeFav(image));
      dispatch(removeComment({ imageId: image.id }));
    } else {
      dispatch(addFav(image));
    }
  };

  const handleDownload = () => {
    console.log("Downloading image with ID:", image.id);
    dispatch(downloadImageThunk(image.id));
  };

  const handleCommentClick = () => {
    dispatch(openModal(image.id));
  };

  const handleTagClick = (tag) => {
    navigate(`/search/${tag}/`);
  };

  return (
    <div className="card">
      <img src={image.urls.thumb} alt={image.description || "Image"} />
      <div className="card__content">
        <p>Photo by {image.user.name}</p>
        <img className="card__content__icon"
          onClick={handleFav}
          src={iconHeart}
          alt={favorite ? "Remove from favorites" : "Add to favorites"}
        />
        {favorite && (
          <img className="card__content__icon"
            onClick={handleCommentClick}
            src={iconComment}
            alt="Add comment"
          />
        )}
        <img className="card__content__icon" onClick={handleDownload} src={iconDownload} alt="Download image" />
        <img className="card__content__icon" src={iconMessage} alt="Send message" />

        {image.width > 0 && <p>Width: {image.width} px</p>}
        {image.height > 0 && <p>Height: {image.height} px</p>}
        {image.likes > 0 && <p>Likes: {image.likes}</p>}
        {image.tags && image.tags.length > 0 ? (
          image.tags.map((tag) => (
            <a key={tag.title} onClick={() => handleTagClick(tag.title)}>
              #{tag.title}{" "}
            </a>
          ))
        ) : (
          <p></p>
        )}

        <p>Description: {comment}</p>
      </div>
      {visible && imageId === image.id && <CommentModal />}
    </div>
  );
};

export default Card;
