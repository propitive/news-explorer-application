import Preloader from "../Preloader/Preloader";
import SearchResultsHome from "../SearchResultsHome/SearchResultsHome";

function MainHome({ isLoading, visible, showMoreItems, newsCards }) {
  return (
    <>
      {isLoading === true && <Preloader />}
      {isLoading === false && (
        <SearchResultsHome
          visible={visible}
          showMoreItems={showMoreItems}
          newsCards={newsCards}
        />
      )}
    </>
  );
}

export default MainHome;
