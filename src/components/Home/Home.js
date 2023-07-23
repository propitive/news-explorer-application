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
  isNothingFound,
}) {
  return (
    <>
      <HeaderHome
        handleSignInClick={handleSignInClick}
        handleSignOutClick={handleSignOutClick}
        handleFetchArticles={handleFetchArticles}
      />
      <MainHome
        isLoading={isLoading}
        visible={visible}
        showMoreItems={showMoreItems}
        newsCards={newsCards}
        isNothingFound={isNothingFound}
      />
      {visible === 3 && <About />}
    </>
  );
}

export default Home;
