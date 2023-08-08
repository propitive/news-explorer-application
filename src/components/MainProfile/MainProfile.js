import Preloader from "../Preloader/Preloader";
import SearchResultsProfile from "../SearchResultsProfile/SearchResultsProfile";

function MainProfile({
  handleDeleteArticle,
  handleProfileEnter,
  handleSaveArticle,
  isLoading,
  isOnProfile,
  keyword,
  savedNewsArticles,
  visible,
}) {
  return (
    <>
      {isLoading.isLoading === true && <Preloader />}
      <SearchResultsProfile
        handleDeleteArticle={handleDeleteArticle}
        handleProfileEnter={handleProfileEnter}
        handleSaveArticle={handleSaveArticle}
        isOnProfile={isOnProfile}
        keyword={keyword}
        savedNewsArticles={savedNewsArticles}
        visible={visible}
      />
    </>
  );
}

export default MainProfile;
