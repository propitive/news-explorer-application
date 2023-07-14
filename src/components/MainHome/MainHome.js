import NothingFound from "../NothingFound/NothingFound"
import Preloader from "../Preloader/Preloader"
import SearchResultsHome from "../SearchResultsHome/SearchResultsHome";

function MainHome({isLoading, visible, showMoreItems}) {
    return (
        <>
            {/* <NothingFound /> */}
            {isLoading.isLoading === true && (
                <Preloader />
            )}
            <SearchResultsHome visible={visible} showMoreItems={showMoreItems} />
        </>
    )
}

export default MainHome;