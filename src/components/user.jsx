import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onToggleBookMark }) => {
    const renderQualities = (qualities) => {
        return qualities.map((quality) => (
            <Quality
                key={quality._id}
                color={quality.color}
                name={quality.name}
            />
        ));
    };
    return (
        <tr key={user._id}>
            <th scope="row">{user.name}</th>
            <td>{renderQualities(user.qualities)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <BookMark
                    status={user.isBookmarked}
                    onToggleBookMark={onToggleBookMark}
                    userId={user._id}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        onDelete(user._id);
                    }}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
