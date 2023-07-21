import React, { useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import logoutIcon from "../../images/logoutIcon.svg";
import logoutIconBlack from "../../images/logoutIconBlack.svg";
import toggleButtonBlack from "../../images/toggle-button-black.svg";
import closeButton from "../../images/close-button.svg";
import { Link } from "react-router-dom";

function NavBarProfile({ handleVisibleReset }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuHomeToggled, setIsMenuProfileToggled] = useState(false);

  const handleToggleMenuHomeAppear = () => {
    setIsMenuProfileToggled(true);
  };
  const handleToggleMenuHomeDisappear = () => {
    setIsMenuProfileToggled(false);
  };

  const handleLogOut = () => {};

  return (
    <>
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

        <img
          className="navbar-profile__toggle-button"
          src={toggleButtonBlack}
          onClick={handleToggleMenuHomeAppear}
        />

        <div className="navbar-profile__buttons">
          <div className="navbar-profile__home-container">
            <Link
              to="/"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
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
      {isMenuHomeToggled && (
        <section className="menu">
          <div className="menu-profile__top">
            <h1 className="menu-profile__title">NewsExplorer</h1>
            <img
              className="menu-profile__close-icon"
              src={closeButton}
              onClick={handleToggleMenuHomeDisappear}
            />
          </div>
          <div className="menu-profile__bottom">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                alignSelf: "center",
                width: "100%",
              }}
            >
              <button
                className="menu-profile__home"
                onClick={handleVisibleReset}
              >
                Home
              </button>
            </Link>
            <h2 className="menu-profile__saved">Saved Articles</h2>
            <button className="menu-profile__signin">
              {currentUser}
              <img
                className="navbar-profile__image"
                src={logoutIcon}
                alt="Logout icon"
              />
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default NavBarProfile;
