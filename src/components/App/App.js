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
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal";

import CurrentUserContext from "../../context/CurrentUserContext";

import "./App.css";

function App() {
  const [currentUser, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [visible, setVisible] = useState(3);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isSuccessfulModalOpen, setIsSuccessfulModalOpen] = useState(false);

  const handleBookmark = () => {};

  const handleRegister = () => {};

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const handleSignIn = () => {};

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
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
                handleSignInClick={handleSignInClick}
              />
            </Route>
          </Switch>
          <Footer />
          {isRegisterModalOpen && (
            <RegisterModal
              isOpen={isRegisterModalOpen}
              onClose={() => setIsRegisterModalOpen(false)}
              onRegister={handleRegister}
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
              onSignIn={handleSignIn}
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
