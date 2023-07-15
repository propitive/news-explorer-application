import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About/About";
import Footer from "../Footer/Footer";
import HeaderHome from "../HeaderHome/HeaderHome";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import Home from "../Home/Home";
import MainHome from "../MainHome/MainHome";
import MainProfile from "../MainProfile/MainProfile";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";

import CurrentUserContext from "../../context/CurrentUserContext";

import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [currentUser, setUser] = useState("Jose");
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const handleVisibleReset = () => {
    setVisible(3);
  };

  const handleBookmark = () => {};

  useEffect(() => {
    setVisible(3);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Switch>
            <Route path="/saved-articles">
              <Profile
                isLoading={isLoading}
                visible={visible}
                showMoreItems={showMoreItems}
                handleVisibleReset={handleVisibleReset}
              />
            </Route>
            <Route path="/">
              <Home
                isLoading={isLoading}
                visible={visible}
                showMoreItems={showMoreItems}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
