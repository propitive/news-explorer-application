import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import closeButton from "../../images/close-button.svg";
import logoutIcon from "../../images/logoutIcon.svg";
import logoutIconBlack from "../../images/logoutIconBlack.svg";
import toggleButtonBlack from "../../images/toggle-button-black.svg";

function NavBarProfile({
  handleVisibleReset,
  handleSignOutClick,
  handleProfileExit,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuHomeToggled, setIsMenuProfileToggled] = useState(false);

  const handleToggleMenuHomeAppear = () => {
    setIsMenuProfileToggled(true);
  };
  const handleToggleMenuHomeDisappear = () => {
    setIsMenuProfileToggled(false);
  };

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsMenuProfileToggled(false);
    }
  };

  const handleSwitchToHome = () => {
    handleVisibleReset();
    handleProfileExit();
  };

  const handleProfileExitClick = () => {
    handleVisibleReset();
    handleSignOutClick();
    handleProfileExit();
  };

  return (
    <>
      <section className="navbar-profile">
        <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <h2
            className="navbar-profile__title"
            onClick={handleSwitchToHome}
            id="home"
          >
            NewsExplorer
          </h2>
        </Link>

        <img
          className="navbar-profile__toggle-button"
          src={toggleButtonBlack}
          onClick={handleToggleMenuHomeAppear}
          alt="hamburger toggle button icon"
        />

        <div className="navbar-profile__buttons">
          <div className="navbar-profile__home-container">
            <Link
              to="/"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <button
                className="navbar-profile__home"
                onClick={handleSwitchToHome}
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
          <button
            className="navbar-profile__logout"
            onClick={handleProfileExitClick}
          >
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
        <section className="menu" onClick={handleCloseOnOverlayClick}>
          <div className="menu-profile__top">
            <h2 className="menu-profile__title">NewsExplorer</h2>
            <img
              className="menu-profile__close-icon"
              src={closeButton}
              onClick={handleToggleMenuHomeDisappear}
              alt="icon to close modal"
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
                onClick={handleSwitchToHome}
              >
                Home
              </button>
            </Link>
            <h2 className="menu-profile__saved">Saved Articles</h2>
            <button
              className="menu-profile__signout"
              onClick={handleProfileExitClick}
            >
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
