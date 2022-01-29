import React, { useEffect, useState } from "react";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserPage = (id) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id.id).then((user) => setUser(user));
    }, []);

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <Link to={`/users/${id.id}/edit`}>
                    <button className="btn btn-primary">Изменить данные</button>
                </Link>
            </div>
        );
    }
    return "loading...";
};
UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
