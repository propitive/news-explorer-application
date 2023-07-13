import NothingFound from "../NothingFound/NothingFound"
import Preloader from "../Preloader/Preloader"
import SearchResults from "../SearchResults/SearchResults";

function Main({isLoading, visible, showMoreItems}) {
    return (
        <>
            {/* <NothingFound /> */}
            {isLoading.isLoading === true && (
                <Preloader />
            )}
            <SearchResults visible={visible} showMoreItems={showMoreItems} />
        </>
    )
}

export default Main;