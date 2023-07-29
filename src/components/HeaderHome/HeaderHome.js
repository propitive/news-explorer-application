import React from "react";

import NavBarHome from "../NavBarHome/NavBarHome";
import SearchForm from "../SearchForm/SearchForm";

function HeaderHome({
  handleSignInClick,
  handleSignOutClick,
  handleFetchArticles,
}) {
  return (
    <header className="header-home">
      <NavBarHome
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
        <SearchForm handleFetchArticles={handleFetchArticles} />
      </div>
    </header>
  );
}

export default HeaderHome;
