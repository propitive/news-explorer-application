import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Api from "../../utils/NewsApi";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import MainApi from "../../utils/MainApi";
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
  // const [token, setToken] = useState(null);
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const [keyword, setKeyword] = useState(null);
  const [isOnProfile, setIsOnProfile] = useState(false);

  const history = useHistory();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token) {
      setIsCheckingToken(true);
      MainApi.getUser(token)
        .then((data) => {
          setUser(data.data.name);
          getUserArticles(token);
          handleCloseModals();
        })
        .catch((err) => {
          if (String(err).includes("401")) {
            localStorage.removeItem("jwt");
          } else {
            console.error("Error checking token:", err);
          }
        })
        .finally(() => {
          setIsCheckingToken(false);
        });
    } else {
      setIsCheckingToken(false);
    }
  }, [token]);

  const getUserArticles = (token) => {
    MainApi.getArticles(token)
      .then((data) => {
        setSavedNewsArticles(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseModals = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(false);
    setIsSuccessfulModalOpen(false);
  };

  const handleDeleteArticle = (card) => {
    MainApi.getArticles(token).then((data) => {
      console.log(data);
      console.log(data.data.length);
      const handleFindArticleId = data.data.some((article) => {
        return article.link === card.link;
      });
      const articleBeingDeleted = handleFindArticleId
        ? data.data.find((article) => {
            return article.link === card.link;
          })
        : undefined;

      setSelectedArticleId(articleBeingDeleted._id);
      console.log(articleBeingDeleted._id);
      console.log(selectedArticleId);
      MainApi.deleteArticle(articleBeingDeleted._id, token)
        .then(() => {
          const updatedSavedArticles = savedNewsArticles.filter(
            (article) => article._id !== articleBeingDeleted._id
          );
          setSavedNewsArticles([...updatedSavedArticles]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleProfileEnter = () => {
    setIsOnProfile(true);
  };

  const handleProfileExit = () => {
    setIsOnProfile(false);
  };

  const handleSaveArticle = (card) => {
    MainApi.saveArticle(card, token)
      .then((data) => {
        console.log(data.data);
        console.log(...savedNewsArticles);
        setSavedNewsArticles([...savedNewsArticles, data.data]);
        setSelectedArticleId(data.data._id);
        // console.log(
        //   "Saved articles after saving: " + JSON.stringify(savedNewsArticles)
        // );
      })
      .catch((err) => {
        console.log(savedNewsArticles);
        console.log(err);
      });
  };

  const handleSetIsNotFound = (x) => {
    setIsNothingFound(false);
    if (x.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  };

  const handleFetchArticles = (input) => {
    const keyword = input.charAt(0).toUpperCase() + input.slice(1);
    setKeyword(keyword);
    setIsNothingFound(false);
    setIsLoading(true);
    Api.search({ input })
      .then((data) => {
        console.log(data);
        setNewsCards(data.articles);
        localStorage.setItem("articles", JSON.stringify(data.articles));
        localStorage.setItem("keyword", keyword);
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

  const handleLogin = (inputValues) => {
    console.log("We are tying to log in now");
    MainApi.signIn(inputValues)
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          console.log("We are fetching articles");
          getUserArticles(data.token);
          // isReloading(data.token);
          setIsSignInModalOpen(false);
        } else setAuthError(data.message || "Invalid credentials");
      })
      .catch((err) => {
        if (String(err).includes("401") || String(err).includes("400")) {
          console.log("Incorrect email or password");
        } else {
          console.log(err);
        }
      });
  };

  console.log("This should be getting logged");

  const handleRegister = ({ name, avatar, email, password }) => {
    MainApi.signUp({ name, avatar, email, password })
      .then((res) => {
        handleLogin({ email, password });
        console.log(res);
      })
      .catch((err) => {
        if (String(err).includes("409")) {
          console.log("Email already in use");
        } else {
          console.log(err);
        }
      });
  };

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handleSignOutClick = () => {
    setUser(null);
    localStorage.clear();
    handleProfileExit();
    history.push("/");
  };

  const handleVisibleReset = () => {
    setVisible(3);
  };

  // const isReloading = (token) => {
  //   MainApi.checkToken(token)
  //     .then((decoded) => {
  //       console.log("this is decoded: ", decoded);
  //       console.log("this is decoded.name: ", decoded.data.name);
  //       setUser(decoded.data.name);
  //       setIsRegisterModalOpen(false);
  //       setIsSignInModalOpen(false);
  //       setAuthError("");
  //       setToken(token);
  //     })
  //     .catch((error) => {
  //       console.error("Error checking token: ", error);
  //       setAuthError("Error checking token");
  //     });
  // };

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
                savedNewsArticles={savedNewsArticles}
                handleProfileExit={handleProfileExit}
                isOnProfile={isOnProfile}
                handleDeleteArticle={handleDeleteArticle}
                handleSaveArticle={handleSaveArticle}
                keyword={keyword}
                newsCards={newsCards}
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
                handleDeleteArticle={handleDeleteArticle}
                handleSaveArticle={handleSaveArticle}
                keyword={keyword}
                savedNewsArticles={savedNewsArticles}
                handleProfileEnter={handleProfileEnter}
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
              isActive={true}
              handleRegister={handleRegister}
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
              isActive={true}
              handleLogin={handleLogin}
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
