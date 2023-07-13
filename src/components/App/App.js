import React, { useEffect, useState } from "react";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import CurrentUserContext from "../../context/CurrentUserContext";

import "./App.css";

function App() {
  const [currentUser, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState([])
  const [visible, setVisible] = useState(3)

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3)
}

useEffect(() => {
  setVisible(3)
}, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main isLoading={isLoading} visible={visible} showMoreItems={showMoreItems} />
          {visible === 3 && (
            <About />
          )}
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
