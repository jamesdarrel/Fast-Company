import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    if (number === 0) return "Никто не тусанет с тобой сегодня =/";
    if (number === 1) return `${number} человек тусанет с тобой сегодня`;
    if (number > 1 && number < 5)
      return `${number} человека тусанут с тобой сегодня`;
    if (number >= 5) return `${number} человек тусанут с тобой сегодня`;
  };
  const renderStyle = (number) => {
    return number === 0 ? "badge bg-danger" : "badge bg-primary";
  };
  const renderQualities = (user) => {
    return user.qualities.map((quality) => (
      <span key={quality._id} className={`badge bg-${quality.color} m-1`}>
        {quality.name}
      </span>
    ));
  };
  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td>{renderQualities(user)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(user._id);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    ));
  };
  const renderTable = () => {
    if (users.length)
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <b>Имя</b>
              </th>
              <th scope="col">
                <b>Качества</b>
              </th>
              <th scope="col">
                <b>Профессия</b>
              </th>
              <th scope="col">
                <b>Встретился, раз</b>
              </th>
              <th scope="col">
                <b>Оценка</b>
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      );
  };

  return (
    <>
      <h2>
        <span className={renderStyle(users.length)}>
          {renderPhrase(users.length)}
        </span>
      </h2>
      {renderTable()}
    </>
  );
};

export default Users;
