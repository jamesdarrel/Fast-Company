import React from "react";
import PropTypes from "prop-types";

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
BookMark.propTypes = {
    status: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default BookMark;
