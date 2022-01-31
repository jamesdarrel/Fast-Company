import React, { useEffect, useState } from "react";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserPage = (id) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id.id).then((user) => setUser(user));
    }, []);
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button className="btn btn-primary" onClick={handleClick}>
                    Изменить данные
                </button>
            </div>
        );
    }
    return "loading...";
};
UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
