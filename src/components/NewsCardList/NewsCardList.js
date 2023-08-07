import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  newsCards,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  visible,
  savedNewsArticles,
  isOnProfile,
}) {
  return (
    <>
      {newsCards.slice(0, visible).map((article, index) => (
        <NewsCard
          key={article._id}
          cardInfo={article}
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          keyword={keyword}
          index={index}
          savedNewsArticles={savedNewsArticles}
          isOnProfile={isOnProfile}
        />
      ))}
    </>
  );
}

export default NewsCardList;
