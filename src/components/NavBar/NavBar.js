import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

import logoutIcon from "../../images/logoutIcon.svg";

function NavBar() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      {currentUser === null 
        ? // "nli" stands for Not Logged In
        <section className="navbar-nli">
          <h1 className="navbar-nli__title" id="home">
            NewsExplorer
          </h1>
          <div className="navbar-nli__buttons">
            <div className="navbar-nli__home-container">
              <button className="navbar-nli__home">Home</button>
              <button className="navbar-nli__white-line" disabled="disabled"></button>
            </div>
            <button className="navbar-nli__signin">Sign in</button>
          </div>
        </section>
        : // li stands for Logged in 
        <section className="navbar-li">
          <h1 className="navbar-li__title" id="home">
            NewsExplorer
          </h1>
          <div className="navbar-li__buttons">
            <div className="navbar-li__home-container">
              <button className="navbar-li__home">Home</button>
              <button className="navbar-li__white-line" disabled="disabled"></button>
            </div>
            <button className="navbar-li__saved-articles">
              Saved Articles
            </button>
            <button className="navbar-li__logout">
              {`${currentUser}`} <img className="navbar-li__image" src={logoutIcon} alt="Logout icon" />
            </button>
          </div>
        </section>
      }
    </>
  );
}

export default NavBar;
