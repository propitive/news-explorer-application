import React, { useState } from "react";
import notBookmarked from "../../images/notBookmarked.svg";
import CurrentUserContext from "../../context/CurrentUserContext";
import NothingFound from "../NothingFound/NothingFound";
import { handleDateFormat } from "../../utils/constants";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SearchResultsHome({ visible, showMoreItems, newsCards }) {
  const currentUser = React.useContext(CurrentUserContext);

  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";
  const [isHovering, setIsHovering] = useState(-1);
  console.log(newsCards);

  return (
    <>
      {newsCards.length > 0 && (
        <div className="search">
          <div className="search__container">
            <h2 className="search__title">Search results</h2>
            <ul className={searchCardsClassname}>
              {newsCards.slice(0, visible).map((card, index) => (
                <Link
                  to={{ pathname: `${card.url}` }}
                  style={{ textDecoration: "none", alignSelf: "center" }}
                  target="_blank"
                >
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
                    <h3 className="card__paragraph" id="js-toclamp">
                      {card.description}
                    </h3>
                    <h3 className="card__publisher">{card.source.name}</h3>
                    <div
                      className={`${
                        isHovering === index
                          ? "card__signin"
                          : "card__signin__hidden"
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
                          <img
                            className="card__bookmark"
                            src={notBookmarked}
                          ></img>
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </ul>
            {visible === 3 && (
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
