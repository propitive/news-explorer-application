import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

import logoutIcon from "../../images/logoutIcon.svg";

function NavBarProfile() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
        <section className="navbar-profile">
          <h1 className="navbar-profile__title" id="home">
            NewsExplorer
          </h1>
          <div className="navbar-profile__buttons">
            <div className="navbar-profile__home-container">
              <button className="navbar-profile__home">Home</button>
              <button className="navbar-profile__white-line" disabled="disabled"></button>
            </div>
            <button className="navbar-profile__saved-articles">
              Saved Articles
            </button>
            <button className="navbar-profile__logout">
              {currentUser} <img className="navbar-profile__image" src={logoutIcon} alt="Logout icon" />
            </button>
          </div>
        </section>
  );
}

export default NavBarProfile;