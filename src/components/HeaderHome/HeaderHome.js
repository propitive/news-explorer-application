import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";

function HeaderHome({
  handleSignInClick,
  handleSignOutClick,
  handleFetchArticles,
}) {
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
    <header className="header-home">
      <NavBar
        handleSignInClick={handleSignInClick}
        handleSignOutClick={handleSignOutClick}
      />
      <div className="header-home__content">
        <div className="header-home__text">
          <h1 className="header-home__title">What's going on in the world?</h1>
          <h2 className="header-home__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
        </div>
        <div className="header-home__search-wrap">
          <div className="header-home__search-wrap__box">
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
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
