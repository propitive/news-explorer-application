import React, { useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import logoutIcon from "../../images/logoutIcon.svg";
import toggleButtonWhite from "../../images/toggle-button-white.svg";
import closeButton from "../../images/close-button.svg";
import { Link } from "react-router-dom";
import SignInModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function NavBar({ handleSignInClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuHomeToggled, setIsMenuProfileToggled] = useState(false);

  const handleToggleMenuHomeAppear = () => {
    setIsMenuProfileToggled(true);
  };
  const handleToggleMenuHomeDisappear = () => {
    setIsMenuProfileToggled(false);
  };

  return (
    <>
      {currentUser === null ? (
        // "nli" stands for Not Logged In
        <section className="navbar-nli">
          <h1 className="navbar-nli__title" id="home">
            NewsExplorer
          </h1>

          <img
            className="navbar-nli__toggle-button"
            src={toggleButtonWhite}
            onClick={handleToggleMenuHomeAppear}
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
        <section className="navbar-li">
          <h1 className="navbar-li__title" id="home">
            NewsExplorer
          </h1>

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
            <button className="navbar-li__logout">
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
      {isMenuHomeToggled && (
        <section className="menu">
          <div className="menu-home__top">
            <h1 className="menu-home__title">NewsExplorer</h1>
            <img
              className="menu-home__close-icon"
              src={closeButton}
              onClick={handleToggleMenuHomeDisappear}
            />
          </div>
          <div className="menu-home__bottom">
            <h2 className="menu-home__home">Home</h2>
            <button className="menu-home__signin">Sign in</button>
          </div>
        </section>
      )}
    </>
  );
}

export default NavBar;
