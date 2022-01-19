import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const UserPage = (userId) => {
    const history = useHistory();
    const handleGoToUsers = () => {
        history.push("/users");
    };

    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId.id).then((user) => setUser(user));
    });

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button
                    onClick={() => {
                        handleGoToUsers();
                    }}
                >
                    Все Пользователи
                </button>
            </div>
        );
    }
    return "loading...";
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
