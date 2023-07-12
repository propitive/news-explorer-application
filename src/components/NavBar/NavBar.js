import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

import logoutIcon from "../../images/logoutIcon.svg";

function NavBar() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      {currentUser === null && (
        <section className="navbar-li">
          <h1 className="navbar-li__title" id="home">
            NewsExplorer
          </h1>
          <div className="navbar-li__buttons">
            <button className="navbar-li__home">Home</button>
            <button className="navbar-li__saved-articles">
              Saved Articles
            </button>
            <button className="navbar-li__logout">
              Jose <img className="navbar-li__image" src={logoutIcon} />
            </button>
          </div>
        </section>
      )}
      {currentUser !== null && (
        // "nli" stands for Not Logged In
        <section className="navbar-nli">
          <h1 className="navbar-nli__title" id="home">
            NewsExplorer
          </h1>
          <div className="navbar-nli__buttons">
            <button className="navbar-nli__home">Home</button>
            <button className="navbar-nli__signin">Sign in</button>
          </div>
        </section>
      )}
    </>
  );
}

export default NavBar;
