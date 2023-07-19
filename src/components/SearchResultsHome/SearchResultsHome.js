import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { cardItems } from "../../utils/constants";
import bookmarked from "../../images/bookmarked.svg";
import notBookmarked from "../../images/notBookmarked.svg";
import CurrentUserContext from "../../context/CurrentUserContext";

function SearchResultsHome({ visible, showMoreItems }) {
  const currentUser = React.useContext(CurrentUserContext);

  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";
  const [newsCards, setNewsCards] = useState([]);
  const [isHovering, setIsHovering] = useState(-1);

  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title">Search results</h2>
        <ul className={searchCardsClassname}>
          {cardItems.articles.slice(0, visible).map((card, index) => (
            <div className="card" key={index}>
              <img
                className="card__image"
                src={card.urlToImage}
                alt={card.title}
              />
              <h3 className="card__date">{card.publishedAt.slice(0, 9)}</h3>
              <h2 className="card__title">{card.title}</h2>
              <h3 className="card__paragraph" id="js-toclamp">
                {card.description}
              </h3>
              <h3 className="card__publisher">
                {card.source.name.split(" ")[0]}
              </h3>
              <div
                className={`${
                  isHovering === index ? "card__signin" : "card__signin__hidden"
                }`}
              >
                <h3>Sign in to save articles</h3>
              </div>
              <div>
                <button className="card__button">
                  {currentUser === null ? (
                    <img
                      className="card__bookmark"
                      src={notBookmarked}
                      onMouseEnter={() => setIsHovering(index)}
                      onMouseLeave={() => setIsHovering(-1)}
                    ></img>
                  ) : (
                    <img className="card__bookmark" src={notBookmarked}></img>
                  )}
                </button>
              </div>
            </div>
          ))}
        </ul>
        {visible === 3 && (
          <button className="search__button" onClick={showMoreItems}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
}
export default SearchResultsHome;
