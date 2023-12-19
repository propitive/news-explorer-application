import React, { useEffect, useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResultsProfile({
  handleDeleteArticle,
  handleProfileEnter,
  handleSaveArticle,
  isOnProfile,
  keyword,
  savedNewsArticles,
  visible,
}) {
  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";

  useEffect(() => {
    handleProfileEnter();
  }, []);

  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title">Saved Articles</h2>
        <ul className={searchCardsClassname}>
          <NewsCardList
            handleDeleteArticle={handleDeleteArticle}
            handleSaveArticle={handleSaveArticle}
            isOnProfile={isOnProfile}
            keyword={keyword}
            newsCards={savedNewsArticles}
            savedNewsArticles={savedNewsArticles}
            visible={visible}
          />
        </ul>
      </div>
    </div>
  );
}
export default SearchResultsProfile;
