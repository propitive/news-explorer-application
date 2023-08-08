import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  handleDeleteArticle,
  handleSaveArticle,
  isOnProfile,
  keyword,
  newsCards,
  savedNewsArticles,
  visible,
}) {
  const cardsVisibleToUser = isOnProfile ? savedNewsArticles.length : visible;

  return (
    <>
      {newsCards.slice(0, cardsVisibleToUser).map((article, index) => (
        <NewsCard
          cardInfo={article}
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          index={index}
          isOnProfile={isOnProfile}
          key={index}
          keyword={keyword}
          savedNewsArticles={savedNewsArticles}
        />
      ))}
    </>
  );
}

export default NewsCardList;
