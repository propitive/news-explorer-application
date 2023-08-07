import React from "react";
import NavBarProfile from "../NavBarProfile/NavBarProfile";
import CurrentUserContext from "../../context/CurrentUserContext";

function HeaderProfile({
  handleVisibleReset,
  handleSignOutClick,
  handleProfileExit,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="header-profile">
      <NavBarProfile
        handleVisibleReset={handleVisibleReset}
        handleSignOutClick={handleSignOutClick}
        handleProfileExit={handleProfileExit}
      />
      <h1 className="header-profile__title">Saved articles</h1>
      <h2 className="header-profile__articles">{`${currentUser}, you have 5 saved articles`}</h2>
      <div className="header-profile__container">
        <h2 className="header-profile__keywords">
          By keywords:{" "}
          <span className="header-profile__examples">
            Nature, Yellowstone, and 2 others
          </span>{" "}
        </h2>
      </div>
    </header>
  );
}

export default HeaderProfile;
