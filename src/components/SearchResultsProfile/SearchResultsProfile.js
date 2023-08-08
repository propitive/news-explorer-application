import React, { useEffect, useState } from "react";
import { cardItems } from "../../utils/constants";
import trashIcon from "../../images/trash.svg";
import { handleDateFormat } from "../../utils/constants";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResultsProfile({
  visible,
  savedNewsArticles,
  isOnProfile,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  handleProfileEnter,
  newsCards,
}) {
  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";
  const [isHovering, setIsHovering] = useState(-1);

  useEffect(() => {
    handleProfileEnter();
    console.log("isOnProfile is ==> TRUE!");
  }, []);

  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title">Search results</h2>
        <ul className={searchCardsClassname}>
          <NewsCardList
            newsCards={savedNewsArticles}
            handleDeleteArticle={handleDeleteArticle}
            handleSaveArticle={handleSaveArticle}
            keyword={keyword}
            visible={visible}
            savedNewsArticles={savedNewsArticles}
            isOnProfile={isOnProfile}
          />
        </ul>
      </div>
    </div>
  );
}
export default SearchResultsProfile;
