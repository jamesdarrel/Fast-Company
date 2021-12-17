import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
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
              <th scope="col">
                <b>Избранное</b>
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user} {...rest} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
