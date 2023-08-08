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
  handleProfileEnter,
}) {
  return (
    <>
      <HeaderProfile
        handleVisibleReset={handleVisibleReset}
        handleSignOutClick={handleSignOutClick}
        handleProfileExit={handleProfileExit}
        savedNewsArticles={savedNewsArticles}
      />
      <MainProfile
        isLoading={isLoading}
        visible={visible}
        savedNewsArticles={savedNewsArticles}
        isOnProfile={isOnProfile}
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        keyword={keyword}
        handleProfileEnter={handleProfileEnter}
      />
    </>
  );
}

export default Profile;
