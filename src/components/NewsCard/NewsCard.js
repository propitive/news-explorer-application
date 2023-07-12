import bookmarked from "../../images/bookmarked.svg"
import dogOnTree from "../../images/dogOnTree.png"
import notBookmarked from "../../images/notBookmarked.svg"

function NewsCard() {
    const renderNotBookmarked = () => {
        return (
            <div> 
                <button className="card__button">
                <img className="card__bookmark" src={notBookmarked}></img>
            </button>
            </div>
        )
    }

    const renderBookmarked = () => {
        return (
                <button className="card__button">
                <img className="card__bookmark" src={bookmarked}></img>
            </button>
        )
    }

    return (
        <div className="card">
            <img className="card__image" src={dogOnTree} alt="Dog sitting on a tree" />
            <h3 className="card__date">November 4, 2020</h3>
            <h2 className="card__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
            <h3 className="card__paragraph">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</h3>
            <h3 className="card__publisher">treehugger</h3>
            {renderNotBookmarked()}
        </div>
    )
}

export default NewsCard;
