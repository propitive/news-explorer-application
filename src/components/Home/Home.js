import HeaderHome from "../HeaderHome/HeaderHome";
import MainHome from "../MainHome/MainHome";
import About from "../About/About";

function Home({
  handleDeleteArticle,
  handleFetchArticles,
  handleProfileEnter,
  handleSaveArticle,
  handleSignInClick,
  handleSignOutClick,
  isLoading,
  isSearching,
  newsCards,
  savedNewsArticles,
  showMoreItems,
  visible,
  keyword,
}) {
  return (
    <>
      <HeaderHome
        handleFetchArticles={handleFetchArticles}
        handleProfileEnter={handleProfileEnter}
        handleSignInClick={handleSignInClick}
        handleSignOutClick={handleSignOutClick}
      />
      <MainHome
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        isLoading={isLoading}
        isSearching={isSearching}
        keyword={keyword}
        newsCards={newsCards}
        savedNewsArticles={savedNewsArticles}
        showMoreItems={showMoreItems}
        visible={visible}
      />
      {(newsCards.length <= 3 || newsCards.length === undefined) && <About />}
    </>
  );
}

export default Home;
