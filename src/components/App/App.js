import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About/About";
import Footer from "../Footer/Footer";
import HeaderHome from "../HeaderHome/HeaderHome";
import HeaderProfile from "../HeaderProfile/HeaderProfile"
import MainHome from "../MainHome/MainHome";
import MainProfile from "../MainProfile/MainProfile";
import NavBar from "../NavBar/NavBar";

import CurrentUserContext from "../../context/CurrentUserContext";

import "./App.css";

function App() {
  const [currentUser, setUser] = useState("Jose");
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState([])
  const [visible, setVisible] = useState(3)

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3)
}

const handleBookmark = () => {

}

useEffect(() => {
  setVisible(3)
}, [])

  return (
    <CurrentUserContext.Provider value={`${currentUser}`}>
      <div className="page">
        <div className="page__wrapper">
          <HeaderHome />
          <MainHome isLoading={isLoading} visible={visible} showMoreItems={showMoreItems} />
          {visible === 3 && (
            <About />
          )}
          {/* <HeaderProfile />
          <MainProfile isLoading={isLoading} visible={visible} showMoreItems={showMoreItems} /> */}
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
