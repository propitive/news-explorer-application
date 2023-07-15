import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import logoutIconBlack from "../../images/logoutIconBlack.svg";
import { Link } from "react-router-dom";

function NavBarProfile({ handleVisibleReset }) {
  const currentUser = React.useContext(CurrentUserContext);
  console.log(handleVisibleReset);

  return (
    <section className="navbar-profile">
      <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
        <h1
          className="navbar-profile__title"
          onClick={handleVisibleReset}
          id="home"
        >
          NewsExplorer
        </h1>
      </Link>
      <div className="navbar-profile__buttons">
        <div className="navbar-profile__home-container">
          <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
            <button
              className="navbar-profile__home"
              onClick={handleVisibleReset}
            >
              Home
            </button>
          </Link>
          <button
            className="navbar-profile__white-line"
            disabled="disabled"
          ></button>
        </div>
        <button className="navbar-profile__saved-articles">
          Saved Articles
        </button>
        <button className="navbar-profile__logout">
          {currentUser}
          <img
            className="navbar-profile__image"
            src={logoutIconBlack}
            alt="Logout icon"
          />
        </button>
      </div>
    </section>
  );
}

export default NavBarProfile;
