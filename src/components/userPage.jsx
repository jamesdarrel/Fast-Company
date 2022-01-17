import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api";
import QualitiesList from "./qualitiesList";

const RenderUser = (id) => {
    const history = useHistory();
    const handleGoToUsers = () => {
        history.replace("/users");
    };

    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id.id).then((user) => setUser(user));
    });

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <h6>completedMeetings: {user.completedMeetings}</h6>
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

export default RenderUser;
