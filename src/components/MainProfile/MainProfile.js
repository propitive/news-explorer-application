import Preloader from "../Preloader/Preloader";
import SearchResultsProfile from "../SearchResultsProfile/SearchResultsProfile";

function MainProfile({
  isLoading,
  visible,
  savedNewsArticles,
  isOnProfile,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  newsCards,
}) {
  return (
    <>
      {isLoading.isLoading === true && <Preloader />}
      <SearchResultsProfile
        visible={visible}
        savedNewsArticles={savedNewsArticles}
        isOnProfile={isOnProfile}
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        keyword={keyword}
        newsCards={newsCards}
      />
    </>
  );
}

export default MainProfile;
