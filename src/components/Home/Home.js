import HeaderHome from "../HeaderHome/HeaderHome";
import MainHome from "../MainHome/MainHome";
import About from "../About/About";

function Home({
  isLoading,
  visible,
  showMoreItems,
  handleSignInClick,
  handleSignOutClick,
  handleFetchArticles,
  newsCards,
  handleDeleteArticle,
  handleSaveArticle,
  keyword,
  savedNewsArticles,
  handleProfileEnter,
}) {
  return (
    <>
      <HeaderHome
        handleSignInClick={handleSignInClick}
        handleSignOutClick={handleSignOutClick}
        handleFetchArticles={handleFetchArticles}
        handleProfileEnter={handleProfileEnter}
      />
      <MainHome
        isLoading={isLoading}
        visible={visible}
        showMoreItems={showMoreItems}
        newsCards={newsCards}
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        keyword={keyword}
        savedNewsArticles={savedNewsArticles}
      />
      {visible === 3 && <About />}
    </>
  );
}

export default Home;
