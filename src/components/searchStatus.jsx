import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    if (number === 0) return "Никто не тусанет с тобой";
    if (number === 1) return `${number} человек тусанет с тобой сегодня`;
    if (number > 1 && number < 5)
      return `${number} человека тусанут с тобой сегодня`;
    if (number >= 5) return `${number} человек тусанут с тобой сегодня`;
  };

  const renderStyle = (number) => {
    return number === 0 ? "badge bg-danger" : "badge bg-primary";
  };

  return (
    <h2>
      <span className={renderStyle(length)}>{renderPhrase(length)}</span>
    </h2>
  );
};

export default SearchStatus;
