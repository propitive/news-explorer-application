import React, { useState } from "react";
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
  newsCards,
}) {
  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";
  const [isHovering, setIsHovering] = useState(-1);

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
          {/* {cardItems.articles.map((card, index) => (
            <div className="card" key={index}>
              <img
                className="card__image"
                src={card.urlToImage}
                alt={card.title}
              />
              <h3 className="card__date">
                {handleDateFormat(card.publishedAt.slice(0, 10))}
              </h3>
              <h2 className="card__title">{card.title}</h2>
              <h3 className="card__paragraph">{card.description}</h3>
              <h3 className="card__publisher">{card.source.name}</h3>
              <div
                className={`${
                  isHovering === index
                    ? "card-profile__signin"
                    : "card__signin__hidden"
                }`}
              >
                {}
                <h3>Remove from saved</h3>
              </div>
              <div>
                <button className="card__button">
                  <img
                    className="card__bookmark"
                    src={trashIcon}
                    onMouseEnter={() => setIsHovering(index)}
                    onMouseLeave={() => setIsHovering(-1)}
                    alt="icon of bookmark"
                  ></img>
                </button>
              </div>
              <div className="card__subtitle">
                <h3 className="card__subititle-content">Tech</h3>
              </div>
            </div>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
export default SearchResultsProfile;
