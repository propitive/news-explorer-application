import Preloader from "../Preloader/Preloader";
import SearchResultsHome from "../SearchResultsHome/SearchResultsHome";

function MainHome({
  handleDeleteArticle,
  handleSaveArticle,
  isLoading,
  isSearching,
  keyword,
  newsCards,
  savedNewsArticles,
  showMoreItems,
  visible,
}) {
  return (
    <>
      {isSearching === true && <Preloader />}
      {isLoading === false && (
        <SearchResultsHome
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          keyword={keyword}
          newsCards={newsCards}
          savedNewsArticles={savedNewsArticles}
          showMoreItems={showMoreItems}
          visible={visible}
        />
      )}
    </>
  );
}

export default MainHome;
