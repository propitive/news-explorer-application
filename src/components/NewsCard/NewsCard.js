import { useState } from "react"
import bookmarked from "../../images/bookmarked.svg"
import dogOnTree from "../../images/dogOnTree.png"
import notBookmarked from "../../images/notBookmarked.svg"

function NewsCard(card, index) {
    console.log(index === 1)
    const [isHovering, setIsHovering] = useState(-1)

    const cardSigninClassname = `card__signin ${isHovering === card.index ? "" : "hidden"}`

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
                <img className="card__bookmark" src={bookmarked} onMouseEnter={() => setIsHovering(card.index)} onMouseLeave={() => setIsHovering(-1)}></img>
            </button>
        )
    }

    return (
        <div className="card">
            <img className="card__image" src={card.card.urlToImage} alt={card.title} />
            <h3 className="card__date">{card.card.publishedAt.slice(0,9)}</h3>
            <h2 className="card__title">{card.card.title}</h2>
            <h3 className="card__paragraph" id="js-toclamp">{card.card.description}</h3>
            <h3 className="card__publisher">{card.card.source.name}</h3>
            <div className={cardSigninClassname}>
                <h3>Sign in to save articles</h3>
            </div>
            {renderNotBookmarked()}
        </div>
    )
}

export default NewsCard;
