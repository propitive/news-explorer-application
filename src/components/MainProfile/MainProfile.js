import Preloader from "../Preloader/Preloader";
import SearchResultsProfile from "../SearchResultsProfile/SearchResultsProfile";

function MainProfile({ isLoading, visible }) {
  return (
    <>
      {isLoading.isLoading === true && <Preloader />}
      <SearchResultsProfile visible={visible} />
    </>
  );
}

export default MainProfile;
