import React, { useState } from "react";

function SearchForm({ handleFetchArticles }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isQuery, setIsQuery] = useState("");

  const buttonClassName = isButtonClicked
    ? "header-home__search-wrap__button-clicked"
    : "header-home__search-wrap__button";

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(function () {
      setIsButtonClicked(false);
    }, 100);
    handleFetchArticles(`${isQuery.toLowerCase()}`);
  };

  return (
    <div className="search-form">
      <input
        className="header-home__search-wrap__text"
        placeholder="Search..."
        onChange={(e) => setIsQuery(e.target.value)}
        value={isQuery}
      />
      <button className={buttonClassName} onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
