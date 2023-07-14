import NavBar from "../NavBar/NavBar";

function HeaderHome() {
  return (
    <header className="header-home">
      <NavBar />
      <div className="header-home__content">
        <h1 className="header-home__title">What's going on in the world?</h1>
        <h2 className="header-home__subtitle">
          Find the latest news on any topic and save them to a personal account.
        </h2>
      </div>
      <div className="header-home__search-wrap">
        <div className="header-home__search-wrap__box">
          <input
            className="header-home__search-wrap__text"
            placeholder="Search..."
          />
          <button className="header-home__search-wrap__button">Search</button>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
