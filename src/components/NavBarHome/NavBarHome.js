import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import closeButton from "../../images/close-button.svg";
import logoutIcon from "../../images/logoutIcon.svg";
import toggleButtonWhite from "../../images/toggle-button-white.svg";

function NavBar({ handleSignInClick, handleSignOutClick, handleProfileEnter }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuNliToggled, setIsMenuNliToggled] = useState(false);
  const [isMenuLiToggled, setIsMenuLiToggled] = useState(false);

  const handleToggleMenuNliAppear = () => {
    setIsMenuNliToggled(true);
  };
  const handleToggleMenuNliDisappear = () => {
    setIsMenuNliToggled(false);
  };

  const handleToggleMenuLiAppear = () => {
    setIsMenuLiToggled(true);
  };
  const handleToggleMenuLiDisappear = () => {
    setIsMenuLiToggled(false);
  };

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsMenuLiToggled(false);
      setIsMenuNliToggled(false);
    }
  };

  const handleMenuLiSignout = () => {
    handleToggleMenuLiDisappear();
    handleSignOutClick();
  };

  return (
    <>
      {currentUser === null ? (
        // "nli" stands for Not Logged In
        <section className="navbar-nli">
          <h2 className="navbar-nli__title" id="home">
            NewsExplorer
          </h2>

          <img
            className="navbar-nli__toggle-button"
            src={toggleButtonWhite}
            onClick={handleToggleMenuNliAppear}
            alt="hamburger toggle button icon"
          />

          <ul className="navbar-nli__buttons">
            <li className="navbar-nli__home-container">
              <Link
                to="/"
                style={{ textDecoration: "none", alignSelf: "center" }}
              >
                <button className="navbar-nli__home">Home</button>
              </Link>
              <button
                className="navbar-nli__white-line"
                disabled="disabled"
              ></button>
            </li>
            <button className="navbar-nli__signin" onClick={handleSignInClick}>
              Sign in
            </button>
          </ul>
        </section>
      ) : (
        // li stands for Logged in
        <section className="navbar-li">
          <h2 className="navbar-li__title" id="home">
            NewsExplorer
          </h2>

          <img
            className="navbar-li__toggle-button"
            src={toggleButtonWhite}
            onClick={handleToggleMenuLiAppear}
            alt="hamburger toggle button icon"
          />

          <ul className="navbar-li__buttons">
            <li className="navbar-li__home-container">
              <Link to="/">
                <button className="navbar-li__home">Home</button>
              </Link>
              <button
                className="navbar-li__white-line"
                disabled="disabled"
              ></button>
            </li>
            <Link
              to="/saved-articles"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <button
                className="navbar-li__saved-articles"
                onClick={handleProfileEnter}
              >
                Saved Articles
              </button>
            </Link>
            <button className="navbar-li__logout" onClick={handleSignOutClick}>
              {`${currentUser}`}{" "}
              <img
                className="navbar-li__image"
                src={logoutIcon}
                alt="Logout icon"
              />
            </button>
          </ul>
        </section>
      )}
      {isMenuNliToggled && (
        <section className="menu" onClick={handleCloseOnOverlayClick}>
          <div className="menu-nli__top">
            <h2 className="menu-nli__title">NewsExplorer</h2>
            <img
              className="menu-nli__close-icon"
              src={closeButton}
              onClick={handleToggleMenuNliDisappear}
              alt="icon to close modal"
            />
          </div>
          <div className="menu-nli__bottom">
            <h2 className="menu-nli__home">Home</h2>
            <button className="menu-nli__signin" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </section>
      )}
      {isMenuLiToggled && (
        <section className="menu" onClick={handleCloseOnOverlayClick}>
          <div className="menu-li__top">
            <h2 className="menu-li__title">NewsExplorer</h2>
            <img
              className="menu-li__close-icon"
              src={closeButton}
              onClick={handleToggleMenuLiDisappear}
              alt="icon to close modal"
            />
          </div>
          <ul className="menu-li__bottom">
            <li className="menu-li__home">Home</li>
            <Link
              to="/saved-articles"
              style={{ textDecoration: "none", alignSelf: "flex-start" }}
            >
              <li className="menu-li__saved-articles">Saved Articles</li>
            </Link>
            <button className="menu-li__signout" onClick={handleMenuLiSignout}>
              {`${currentUser}`}{" "}
              <img
                className="navbar-li__image"
                src={logoutIcon}
                alt="Logout icon"
              />
            </button>
          </ul>
        </section>
      )}
    </>
  );
}

export default NavBar;
