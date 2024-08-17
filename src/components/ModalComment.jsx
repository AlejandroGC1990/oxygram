// components/CommentModal.jsx
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { removeComment, closeModal, setComment } from "../features/comments/commentsSlice";

const CommentModal = () => {
  const dispatch = useDispatch();
  const { visible, imageId } = useSelector((state) => state.comments.modal);
  const comment = useSelector((state) => state.comments.comments[imageId]) || "";
  const [inputValue, setInputValue] = useState(comment);

  useEffect(() => {
    setInputValue(comment);
  }, [comment]);

  const handleSave = () => {
    dispatch(setComment({ imageId, comment: inputValue }));
    dispatch(closeModal());
  };

  const handleDelete = () => {
    dispatch(removeComment({ imageId }));
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!visible) return null;

  return (
    <div className="modal">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default CommentModal;
