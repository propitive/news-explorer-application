import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Api from "../../utils/NewsApi";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal";

import CurrentUserContext from "../../context/CurrentUserContext";

import "./App.css";

function App() {
  const [currentUser, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState({});
  const [visible, setVisible] = useState(3);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isSuccessfulModalOpen, setIsSuccessfulModalOpen] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);

  const history = useHistory();

  const handleSetIsNotFound = (x) => {
    setIsNothingFound(false);
    if (x.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  };

  const handleFetchArticles = (input) => {
    setIsNothingFound(false);
    setIsLoading(true);
    Api.search({ input })
      .then((data) => {
        setNewsCards(data.articles);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        handleSetIsNotFound(newsCards);
        setVisible(3);
      });
  };

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handleSignOutClick = () => {
    setUser(null);
    history.push("/");
  };

  const handleVisibleReset = () => {
    setVisible(3);
  };

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    setVisible(3);
  }, []);

  useEffect(() => {}, [setNewsCards]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Switch>
            <Route path="/saved-articles">
              <Profile
                isLoading={isLoading}
                visible={visible}
                handleVisibleReset={handleVisibleReset}
                handleSignOutClick={handleSignOutClick}
              />
            </Route>
            <Route path="/">
              <Home
                isLoading={isLoading}
                visible={visible}
                showMoreItems={showMoreItems}
                handleSignInClick={handleSignInClick}
                handleSignOutClick={handleSignOutClick}
                handleFetchArticles={handleFetchArticles}
                newsCards={newsCards}
              />
            </Route>
          </Switch>
          <Footer />
          {isRegisterModalOpen && (
            <RegisterModal
              isOpen={isRegisterModalOpen}
              onClose={() => setIsRegisterModalOpen(false)}
              authError={authError}
              switchToSignIn={() => {
                setIsRegisterModalOpen(false);
                setIsSignInModalOpen(true);
              }}
            />
          )}
          {isSignInModalOpen && (
            <SignInModal
              isOpen={isSignInModalOpen}
              onClose={() => setIsSignInModalOpen(false)}
              authError={authError}
              switchToRegister={() => {
                setIsSignInModalOpen(false);
                setIsRegisterModalOpen(true);
              }}
            />
          )}
          {isSuccessfulModalOpen && (
            <SuccessfulModal
              isOpen={isSuccessfulModalOpen}
              onClose={() => setIsSuccessfulModalOpen(false)}
              switchToSignIn={() => {
                setIsSuccessfulModalOpen(false);
                setIsSignInModalOpen(true);
              }}
            />
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
