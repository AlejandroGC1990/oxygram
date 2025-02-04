import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../features/favs/favsSlice";
import { downloadImageThunk } from "../features/randomPhotos/randomPhotoThunk";
import {
  openCommentModal,
  removeComment,
} from "../features/comment/commentSlice";
import { openContactModal } from "../features/modals/modalSlice";
import CommentModal from "./ModalComment";
import ContactModal from "./ModalContact";
// import iconHeart from "../assets/icon_heart.png";
import iconHeart from "../assets/heart_favourite_blue.png";
// import iconRedHeart from "../assets/icon_heartRed.png";
import iconRedHeart from "../assets/heart_favourite_red.png";
// import iconMessage from "../assets/icon_message.png";
import iconMessage from "../assets/messages_blue.png";
// import iconDownload from "../assets/icon_download.png";
import iconDownload from "../assets/download_blue.png";
// import iconComment from "../assets/icon_comment.png";
import iconComment from "../assets/comment_blue.png";
import "../styles/Components/_card.scss";

const Card = ({ image }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const navigate = useNavigate();
  const favs = useSelector((state) => state.favs.favs);
  const comments = useSelector((state) => state.comments.comments);
  const { visible, imageId } = useSelector((state) => state.comments.modal);
  const isContactModalOpen = useSelector((state) => state.contact.isModalOpen);

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
    dispatch(openCommentModal(image.id));
  };

  const handleMessageClick = () => {
    dispatch(openContactModal());
  };

  const handleTagClick = (tag) => {
    navigate(`/search/${tag}/`);
  };

  return (
    <div className="card">
      <p className="card__nameUser">
        <strong>@{image.user.name}</strong>
      </p>
      <div className="card__content">
        <img
          className="card__content__img"
          src={image.urls.regular}
          alt={image.description || "Image"}
        />
      </div>
      {/* <div className="card__subcontent"> */}
      <div className={`card__subcontent ${darkMode ? "dark-mode" : ""}`}>
        <div className="card__subcontent__icon">
          <img
            className="card__subcontent__icon__action"
            onClick={handleFav}
            src={favorite ? iconRedHeart : iconHeart}
            alt={favorite ? "Remove from favorites" : "Add to favorites"}
          />
          {image.likes > 0 && (
            <p className="">
              <strong>{image.likes}</strong>
            </p>
          )}
          {favorite && (
            <img
              className="card__subcontent__icon__action"
              onClick={handleCommentClick}
              src={iconComment}
              alt="Add comment"
            />
          )}
          <img
            className="card__subcontent__icon__action"
            onClick={handleMessageClick}
            src={iconMessage}
            alt="Send message"
          />
          <img
            className="card__subcontent__icon__action"
            onClick={handleDownload}
            src={iconDownload}
            alt="Download image"
          />
          <p className="card__subcontent__icon__dimensions">
            <strong> W:</strong> {image.width}px <strong>H:</strong>{" "}
            {image.height}px
          </p>
        </div>

        <p className="card__subcontent__date">
          <strong> Date:</strong> {image.created_at}
        </p>

        {comment.length > 0 && (
          <p className="card__subcontent__description">
            <strong>Description:</strong> {comment}
          </p>
        )}

        <div className="card__subcontent__tags">
          {image.tags && image.tags.length > 0 ? (
            image.tags.map((tag) => (
              <a key={tag.title} onClick={() => handleTagClick(tag.title)}>
                #{tag.title}{" "}
              </a>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>

      {visible && imageId === image.id && <CommentModal />}
      {isContactModalOpen && <ContactModal />}
    </div>
  );
};

export default Card;
