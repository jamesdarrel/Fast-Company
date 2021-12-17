import React from "react";

const Quality = ({ color, name }) => {
  return <span className={`badge bg-${color} m-1`}>{name}</span>;
};

export default Quality;
