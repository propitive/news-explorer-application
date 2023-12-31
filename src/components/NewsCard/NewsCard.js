import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CurrentUserContext from "../../context/CurrentUserContext";
import { handleDateFormat } from "../../utils/constants";
import trashIcon from "../../images/trash.svg";
import newsIcon from "../../images/news.png";

function NewsCard({
  cardInfo,
  handleDeleteArticle,
  handleSaveArticle,
  index,
  isOnProfile,
  keyword,
  savedNewsArticles,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isHovering, setIsHovering] = useState(-1);

  const card = {
    keyword: keyword || cardInfo.keyword,
    title: cardInfo.title,
    text: cardInfo.description || cardInfo.text,
    date: cardInfo.publishedAt || cardInfo.date,
    source: cardInfo.source.name || cardInfo.source,
    link: cardInfo.url || cardInfo.link,
    image: cardInfo.urlToImage || cardInfo.image,
    id: cardInfo._id || cardInfo.id,
  };

  const isBookmarked = savedNewsArticles.some(
    (article) => article.link === card.link
  );

  const handleBookMarkButtonClick = (evt) => {
    if (evt.target.classList.contains("card__button-active")) {
      handleDeleteArticle(card);
    } else {
      handleSaveArticle(card);
    }
  };

  const handleTrashIconClick = () => {
    handleDeleteArticle(card);
  };

  const cardButtonClassname = isBookmarked
    ? "card__button card__button-active"
    : "card__button card__button-inactive";

  return (
    <>
      <div className="card">
        <Link
          to={{ pathname: `${card.link}` }}
          style={{ textDecoration: "none", alignSelf: "center" }}
          target="_blank"
        >
          <img
            className="card__image"
            src={card.image ? card.image : newsIcon}
            alt={card.title}
            loading="lazy"
          />
          <h3 className="card__date">
            {handleDateFormat(card.date.slice(0, 10))}
          </h3>
          <h2 className="card__title">{card.title}</h2>
          <h3 className="card__paragraph" id="js-toclamp">
            {card.text}
          </h3>
          <h3 className="card__publisher">{card.source}</h3>
          <div
            className={`${
              isHovering === index ? "card__signin" : "card__signin__hidden"
            }`}
          >
            {isOnProfile ? (
              <h3>Remove from saved</h3>
            ) : (
              <h3>Sign in to save articles</h3>
            )}
          </div>
        </Link>
        <div>
          {isOnProfile ? (
            <button className="card__button">
              <img
                className="card__bookmark"
                onClick={handleTrashIconClick}
                src={trashIcon}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(-1)}
                alt="icon of bookmark"
                loading="lazy"
              ></img>
            </button>
          ) : (
            <button
              className={cardButtonClassname}
              onClick={
                currentUser !== null ? handleBookMarkButtonClick : undefined
              }
              onMouseEnter={
                currentUser === null ? () => setIsHovering(index) : undefined
              }
              onMouseLeave={
                currentUser === null ? () => setIsHovering(-1) : undefined
              }
            ></button>
          )}
        </div>
        {isOnProfile && (
          <div className="card__subtitle">
            <h3 className="card__subititle-content">{cardInfo.keyword}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default NewsCard;
