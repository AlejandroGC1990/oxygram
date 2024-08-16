import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const CommentModal = ({ comment, onSave, onClose }) => {
  const [localComment, setLocalComment] = useState(comment || "");

  useEffect(() => {
    setLocalComment(comment);
  }, [comment]);

  const handleSave = () => {
    onSave(localComment);
    onClose();
  };

  const handleDelete = () => {
    onSave("");
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Comment</h2>
        <textarea
          value={localComment}
          onChange={(e) => setLocalComment(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CommentModal