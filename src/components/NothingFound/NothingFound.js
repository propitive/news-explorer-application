import sadMagnifyingGlass from "../../images/sadMagnifyingGlass.svg"

function NothingFound() {
    return (
        <section className="nothing-found">
            <img className="nothing-found__image" src={sadMagnifyingGlass} alt="Sad magnifying glasses" />
            <h2 className="nothing-found__title">Nothing found</h2>
            <h3 className="nothing-sound__subtitle">Sorry, but nothing matched <br></br><br></br> your search terms.</h3>
        </section>
    )
}

export default NothingFound;