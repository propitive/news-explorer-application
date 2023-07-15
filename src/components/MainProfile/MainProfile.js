import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import SearchResultsProfile from "../SearchResultsProfile/SearchResultsProfile";

function MainProfile({ isLoading, visible, showMoreItems }) {
  return (
    <>
      {/* <NothingFound /> */}
      {isLoading.isLoading === true && <Preloader />}
      <SearchResultsProfile visible={visible} showMoreItems={showMoreItems} />
    </>
  );
}

export default MainProfile;
