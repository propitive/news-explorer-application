import React from "react";
import NavBarProfile from "../NavBarProfile/NavBarProfile";
import CurrentUserContext from "../../context/CurrentUserContext";

function HeaderProfile({
  handleProfileExit,
  handleSignOutClick,
  handleVisibleReset,
  savedNewsArticles,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const keywords = savedNewsArticles.map((article) => article.keyword);

  const getKeywordString = (data) => {
    if (keywords.length === 1) {
      return `${keywords[0]}`;
    }

    if (keywords.length > 1) {
      const count = {};

      for (const keyword of data) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      const counted = [];
      for (const item in count) {
        counted.push([item, count[item]]);
      }

      counted.sort((a, b) => {
        return b[1] - a[1];
      });

      if (counted.length === 1) {
        return `${counted[0][0]}`;
      } else if (counted.length === 2) {
        return `${counted[0][0]} and ${counted[1][0]}`;
      } else {
        return `${counted[0][0]}, ${counted[1][0]}, and ${
          counted.length - 2
        } more`;
      }
    } else {
      return null;
    }
  };

  const keywordString = getKeywordString(keywords);

  return (
    <header className="header-profile">
      <NavBarProfile
        handleProfileExit={handleProfileExit}
        handleSignOutClick={handleSignOutClick}
        handleVisibleReset={handleVisibleReset}
      />
      <h1 className="header-profile__title">Saved articles</h1>
      <h2 className="header-profile__articles">{`${currentUser}, you have ${savedNewsArticles.length} saved articles`}</h2>
      <div className="header-profile__container">
        <h2 className="header-profile__keywords">
          By keywords:{" "}
          <span className="header-profile__examples">
            {keywordString ? keywordString : ""}
          </span>{" "}
        </h2>
      </div>
    </header>
  );
}

export default HeaderProfile;
