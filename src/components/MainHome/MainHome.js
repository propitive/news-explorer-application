import Preloader from "../Preloader/Preloader";
import SearchResultsHome from "../SearchResultsHome/SearchResultsHome";

function MainHome({
  isLoading,
  visible,
  showMoreItems,
  newsCards,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  savedNewsArticles,
}) {
  return (
    <>
      {isLoading === true && <Preloader />}
      {isLoading === false && (
        <SearchResultsHome
          visible={visible}
          showMoreItems={showMoreItems}
          newsCards={newsCards}
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          keyword={keyword}
          savedNewsArticles={savedNewsArticles}
        />
      )}
    </>
  );
}

export default MainHome;
