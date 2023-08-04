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
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";
  // const [isHovering, setIsHovering] = useState(-1);

  // const handleBookMarkButtonClick = (evt) => {
  //   if (evt.target.classList.contains("card__button-active")) {
  //     evt.target.classList.remove("card__button-active");
  //     evt.target.classList.add("card__button-inactive");
  //   } else {
  //     evt.target.classList.add("card__button-active");
  //     evt.target.classList.remove("card__button-inactive");
  //   }
  // };

  return (
    <>
      {newsCards.length > 0 && (
        <div className="search">
          <div className="search__container">
            <h2 className="search__title">Search results</h2>
            <section className={searchCardsClassname}>
              <NewsCardList
                newsCards={newsCards}
                handleDeleteArticle={handleDeleteArticle}
                handleSaveArticle={handleSaveArticle}
                keyword={keyword}
                visible={visible}
                savedNewsArticles={savedNewsArticles}
              />
              {/* {newsCards.slice(0, visible).map((card, index) => (
                <div className="card" key={index}>
                  <Link
                    to={{ pathname: `${card.url}` }}
                    style={{ textDecoration: "none", alignSelf: "center" }}
                    target="_blank"
                  >
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
                  </Link>
                  <div>
                    <button
                      className="card__button card__button-inactive"
                      onClick={
                        currentUser !== null
                          ? handleBookMarkButtonClick
                          : undefined
                      }
                      onMouseEnter={
                        currentUser === null
                          ? () => setIsHovering(index)
                          : undefined
                      }
                      onMouseLeave={
                        currentUser === null
                          ? () => setIsHovering(-1)
                          : undefined
                      }
                    ></button>
                  </div>
                </div>
              ))} */}
            </section>
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
