import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import logoutIconBlack from "../../images/logoutIconBlack.svg";
import { Link } from "react-router-dom";

function NavBarProfile() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="navbar-profile">
      <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
        <h1 className="navbar-profile__title" id="home">
          NewsExplorer
        </h1>
      </Link>
      <div className="navbar-profile__buttons">
        <div className="navbar-profile__home-container">
          <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
            <button className="navbar-profile__home">Home</button>
          </Link>
          <button
            className="navbar-profile__white-line"
            disabled="disabled"
          ></button>
        </div>
        <Link
          to="/saved-articles"
          style={{ textDecoration: "none", alignSelf: "center" }}
        >
          <button className="navbar-profile__saved-articles">
            Saved Articles
          </button>
        </Link>
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
