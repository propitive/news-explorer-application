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
  handleProfileEnter,
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
        handleProfileEnter={handleProfileEnter}
      />
    </>
  );
}

export default MainProfile;
