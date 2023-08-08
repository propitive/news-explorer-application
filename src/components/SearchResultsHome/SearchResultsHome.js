import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import NothingFound from "../NothingFound/NothingFound";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResultsHome({
  handleDeleteArticle,
  handleSaveArticle,
  isOnProfile,
  keyword,
  newsCards,
  savedNewsArticles,
  showMoreItems,
  visible,
}) {
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
                handleDeleteArticle={handleDeleteArticle}
                handleSaveArticle={handleSaveArticle}
                isOnProfile={isOnProfile}
                keyword={keyword}
                newsCards={newsCards}
                savedNewsArticles={savedNewsArticles}
                visible={visible}
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
