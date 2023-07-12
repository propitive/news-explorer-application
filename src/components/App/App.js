import React, { useState } from "react";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NothingFound from "../NothingFound/NothingFound";

import CurrentUserContext from "../../context/CurrentUserContext";

import "./App.css";

function App() {
  const [currentUser, setUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <NothingFound />
          <About />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
