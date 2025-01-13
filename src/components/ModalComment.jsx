import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  removeComment,
  closeCommentModal,
  setComment,
} from "../features/comment/commentSlice";
import "../styles/Components/_modalComment.scss";

const CommentModal = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const { visible, imageId } = useSelector((state) => state.comments.modal);
  const comment =
    useSelector((state) => state.comments.comments[imageId]) || "";
  const [inputValue, setInputValue] = useState(comment);

  useEffect(() => {
    setInputValue(comment);
  }, [comment]);

  const handleSave = () => {
    dispatch(setComment({ imageId, comment: inputValue }));
    dispatch(closeCommentModal());
  };

  const handleDelete = () => {
    dispatch(removeComment({ imageId }));
    dispatch(closeCommentModal());
  };

  const handleClose = () => {
    dispatch(closeCommentModal());
  };

  if (!visible) return null;

  return (
    <div className={`modal ${darkMode ? "dark-mode" : ""}`}>
      <div className="modal__content">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="modal__content__action">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
