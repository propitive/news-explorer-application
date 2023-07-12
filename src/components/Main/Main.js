import NewsCard from "../NewsCard/NewsCard";
import NothingFound from "../NothingFound/NothingFound"
import Preloader from "../Preloader/Preloader"

function Main(isLoading) {
    return (
        <>
            {/* <NothingFound /> */}
            {isLoading.isLoading === true && (
                <Preloader />
            )}
            <NewsCard />
        </>
    )
}

export default Main;