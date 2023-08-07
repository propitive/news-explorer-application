import HeaderProfile from "../HeaderProfile/HeaderProfile";
import MainProfile from "../MainProfile/MainProfile";

function Profile({
  isLoading,
  visible,
  handleVisibleReset,
  handleSignOutClick,
  savedNewsArticles,
  handleProfileExit,
  isOnProfile,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  newsCards,
}) {
  return (
    <>
      <HeaderProfile
        handleVisibleReset={handleVisibleReset}
        handleSignOutClick={handleSignOutClick}
        handleProfileExit={handleProfileExit}
      />
      <MainProfile
        isLoading={isLoading}
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

export default Profile;
