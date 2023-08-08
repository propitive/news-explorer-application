import HeaderProfile from "../HeaderProfile/HeaderProfile";
import MainProfile from "../MainProfile/MainProfile";

function Profile({
  handleDeleteArticle,
  handleProfileEnter,
  handleProfileExit,
  handleSaveArticle,
  handleSignOutClick,
  handleVisibleReset,
  isLoading,
  isOnProfile,
  keyword,
  savedNewsArticles,
  visible,
}) {
  return (
    <>
      <HeaderProfile
        handleProfileExit={handleProfileExit}
        handleSignOutClick={handleSignOutClick}
        handleVisibleReset={handleVisibleReset}
        savedNewsArticles={savedNewsArticles}
      />
      <MainProfile
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        handleProfileEnter={handleProfileEnter}
        isLoading={isLoading}
        isOnProfile={isOnProfile}
        keyword={keyword}
        savedNewsArticles={savedNewsArticles}
        visible={visible}
      />
    </>
  );
}

export default Profile;
