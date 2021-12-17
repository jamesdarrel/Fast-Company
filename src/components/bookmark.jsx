import React from "react";

const BookMark = ({ status, onToggleBookMark, userId }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        onToggleBookMark(userId);
      }}
    >
      <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
    </button>
  );
};

export default BookMark;
