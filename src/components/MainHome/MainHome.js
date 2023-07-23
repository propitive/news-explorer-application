import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import SearchResultsHome from "../SearchResultsHome/SearchResultsHome";

function MainHome({
  isLoading,
  visible,
  showMoreItems,
  newsCards,
  isNothingFound,
}) {
  return (
    <>
      {/* {isNothingFound === true && <NothingFound />} */}
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
