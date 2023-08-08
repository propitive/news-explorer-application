import React, { useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import NothingFound from "../NothingFound/NothingFound";
import { handleDateFormat } from "../../utils/constants";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResultsHome({
  visible,
  showMoreItems,
  newsCards,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  savedNewsArticles,
  isOnProfile,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";

  const searchContainerClassname =
    newsCards.length > 3 ? "search__container" : "search__container__no-button";

  return (
    <>
      {newsCards.length > 0 && (
        <div className="search">
          <div className={searchContainerClassname}>
            <h2 className="search__title">Search results</h2>
            <section className={searchCardsClassname}>
              <NewsCardList
                newsCards={newsCards}
                handleDeleteArticle={handleDeleteArticle}
                handleSaveArticle={handleSaveArticle}
                keyword={keyword}
                visible={visible}
                savedNewsArticles={savedNewsArticles}
                isOnProfile={isOnProfile}
              />
            </section>
            {visible === 3 && newsCards.length > 3 && (
              <button className="search__button" onClick={showMoreItems}>
                Show more
              </button>
            )}
          </div>
        </div>
      )}
      {newsCards.length <= 0 && <NothingFound />}
    </>
  );
}
export default SearchResultsHome;
