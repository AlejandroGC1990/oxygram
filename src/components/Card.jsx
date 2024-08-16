import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentModal from "./ModalComment";
import iconHeart from "../assets/icon_heart.png";
import iconMessage from "../assets/icon_message.png";
import iconDownload from "../assets/icon_download.png";
import iconComment from "../assets/icon_comment.png";
import { addFav, removeFav } from "../features/favs/favsSlice";
import { downloadImageThunk } from "../features/imgs/imgsThunk";
import { useNavigate } from "react-router-dom";
import {
  removeComment,
  setComment,
  loadComments,
} from "../features/comments/commentsSlice";

const Card = ({ image }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favs = useSelector((state) => state.favs.favs);
  const comments = useSelector((state) => state.comments);

  const favorite = favs.some((fav) => fav.id === image.id);
  const comment = comments[image.id] || "";

  useEffect(() => {
    setNewComment(comment);
  }, [comment, image.id]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      const parsedComments = JSON.parse(savedComments);
      dispatch(loadComments(parsedComments));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleFav = () => {
    if (favorite) {
      dispatch(removeFav(image));
      dispatch(removeComment({ imageId: image.id }));
      setNewComment("");
    } else {
      dispatch(addFav(image));
    }
  };

  const handleDownload = () => {
    dispatch(downloadImageThunk(image.id));
  };

  const handleCommentClick = () => {
    setShowCommentModal(true);
  };

  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };

  const handleSaveComment = (newComment) => {
    dispatch(setComment({ imageId: image.id, comment: newComment }));
    setNewComment(newComment);
    setShowCommentModal(false);
  };

  const handleTagClick = (tag) => {
    navigate(`/search/${tag}`);
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
        {favorite && (
          <img
            onClick={handleCommentClick}
            src={iconComment}
            alt="Add comment"
          />
        )}
        <img onClick={handleDownload} src={iconDownload} alt="Download image" />
        <img src={iconMessage} alt="Send message" />

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
      {showCommentModal && (
        <CommentModal
          comment={newComment}
          onSave={handleSaveComment}
          onClose={handleCloseCommentModal}
        />
      )}
    </div>
  );
};

export default Card;
