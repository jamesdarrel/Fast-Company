import React, { useEffect, useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };

    const handleToggleBookMark = (userId) => {
        setUsers(
            users.map((user) => {
                if (user._id === userId) {
                    return { ...user, isBookmarked: !user.isBookmarked };
                }
                return user;
            })
        );
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                />
            )}
        </>
    );
}

export default App;
