import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <NavBar />
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <h2 className="header__subtitle">
          Find the latest news on any topic and save them to a personal account.
        </h2>
      </div>
      <div className="header__search-wrap">
        <div className="header__search-wrap__box">
          <input
            className="header__search-wrap__text"
            placeholder="Search..."
          />
          <button className="header__search-wrap__button">Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
