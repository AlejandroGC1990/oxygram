import { useState } from "react";

const CommentModal = ({ comment, onSave, onClose }) => {
  const [inputValue, setInputValue] = useState(comment);

  const handleSave = () => {
    if (typeof onSave === 'function') {
      onSave(inputValue);
    }
  };

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="modal">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default CommentModal;
