import React, { useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import logoutIcon from "../../images/logoutIcon.svg";
import toggleButtonWhite from "../../images/toggle-button-white.svg";
import closeButton from "../../images/close-button.svg";
import { Link } from "react-router-dom";
import SignInModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function NavBar({ handleSignInClick, handleSignOutClick }) {
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

  // useEffect(() => {
  //   currentUser === null ? setIsMenuLiToggled(false) : setIsMenuLiToggled(true);
  // }, currentUser);

  // useEffect(() => {
  //   setIsMenuNliToggled(false)
  // }, [])

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsMenuLiToggled(false);
        setIsMenuNliToggled(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {currentUser === null ? (
        // "nli" stands for Not Logged In
        <section className="navbar-nli" onClick={handleCloseOnOverlayClick}>
          <h1 className="navbar-nli__title" id="home">
            NewsExplorer
          </h1>

          <img
            className="navbar-nli__toggle-button"
            src={toggleButtonWhite}
            onClick={handleToggleMenuNliAppear}
          />

          <div className="navbar-nli__buttons">
            <div className="navbar-nli__home-container">
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
            </div>
            <button className="navbar-nli__signin" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
        </section>
      ) : (
        // li stands for Logged in
        <section className="navbar-li" onClick={handleCloseOnOverlayClick}>
          <h1 className="navbar-li__title" id="home">
            NewsExplorer
          </h1>

          <img
            className="navbar-li__toggle-button"
            src={toggleButtonWhite}
            onClick={handleToggleMenuLiAppear}
          />

          <div className="navbar-li__buttons">
            <div className="navbar-li__home-container">
              <Link to="/">
                <button className="navbar-li__home">Home</button>
              </Link>
              <button
                className="navbar-li__white-line"
                disabled="disabled"
              ></button>
            </div>
            <Link
              to="/saved-articles"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <button className="navbar-li__saved-articles">
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
          </div>
        </section>
      )}
      {isMenuNliToggled && (
        <section className="menu" onClick={handleCloseOnOverlayClick}>
          <div className="menu-nli__top">
            <h1 className="menu-nli__title">NewsExplorer</h1>
            <img
              className="menu-nli__close-icon"
              src={closeButton}
              onClick={handleToggleMenuNliDisappear}
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
            <h1 className="menu-li__title">NewsExplorer</h1>
            <img
              className="menu-li__close-icon"
              src={closeButton}
              onClick={handleToggleMenuLiDisappear}
            />
          </div>
          <div className="menu-li__bottom">
            <h2 className="menu-li__home">Home</h2>
            <Link
              to="/saved-articles"
              style={{ textDecoration: "none", alignSelf: "flex-start" }}
            >
              <h2 className="menu-li__saved-articles">Saved Articles</h2>
            </Link>
            <button className="menu-li__signout" onClick={handleMenuLiSignout}>
              {`${currentUser}`}{" "}
              <img
                className="navbar-li__image"
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

export default NavBar;
