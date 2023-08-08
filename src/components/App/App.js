import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Api from "../../utils/NewsApi";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal";

import CurrentUserContext from "../../context/CurrentUserContext";

function App() {
  const [authError, setAuthError] = useState("");
  const [currentUser, setUser] = useState(null);
  const [isOnProfile, setIsOnProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSuccessfulModalOpen, setIsSuccessfulModalOpen] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [newsCards, setNewsCards] = useState({});
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [visible, setVisible] = useState(3);

  const history = useHistory();
  const token = localStorage.getItem("jwt");

  // effects

  useEffect(() => {
    if (token) {
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
        });
    }
  }, [token]);

  useEffect(() => {
    setVisible(3);
  }, []);

  //modal functions

  const handleCloseModals = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(false);
    setIsSuccessfulModalOpen(false);
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

  // api functions

  const getUserArticles = (token) => {
    MainApi.getArticles(token)
      .then((data) => {
        setSavedNewsArticles(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteArticle = (card) => {
    MainApi.getArticles(token).then((data) => {
      const handleFindArticleId = data.data.some((article) => {
        return article.link === card.link;
      });
      const articleBeingDeleted = handleFindArticleId
        ? data.data.find((article) => {
            return article.link === card.link;
          })
        : undefined;

      setSelectedArticleId(articleBeingDeleted._id);
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

  const handleFetchArticles = (input) => {
    const keyword =
      input.charAt(0).toUpperCase() + input.replace(/ .*/, "").slice(1);
    setKeyword(keyword);
    setIsLoading(true);
    Api.search({ input })
      .then((data) => {
        setNewsCards(data.articles);
        localStorage.setItem("articles", JSON.stringify(data.articles));
        localStorage.setItem("keyword", keyword);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        setVisible(3);
      });
  };

  const handleLogin = (inputValues) => {
    setIsLoading(true);
    MainApi.signIn(inputValues)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          getUserArticles(data.token);
          setIsSignInModalOpen(false);
        } else setAuthError(data.message || "Invalid credentials");
      })
      .catch((err) => {
        if (String(err).includes("401") || String(err).includes("400")) {
          console.log("Incorrect email or password");
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading(true);
    MainApi.signUp({ name, avatar, email, password })
      .then((res) => {
        setIsRegisterModalOpen(false);
        setIsSuccessfulModalOpen(true);
      })
      .catch((err) => {
        if (String(err).includes("409")) {
          console.log("Email already in use");
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveArticle = (card) => {
    MainApi.saveArticle(card, token)
      .then((data) => {
        setSavedNewsArticles([...savedNewsArticles, data.data]);
        setSelectedArticleId(data.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // button functions

  const handleProfileEnter = () => {
    setIsOnProfile(true);
  };

  const handleProfileExit = () => {
    setIsOnProfile(false);
    setNewsCards({});
  };

  const handleVisibleReset = () => {
    setVisible(3);
  };

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Switch>
            <ProtectedRoute currentUser={currentUser} path="/saved-articles">
              <Profile
                handleDeleteArticle={handleDeleteArticle}
                handleProfileEnter={handleProfileEnter}
                handleProfileExit={handleProfileExit}
                handleSaveArticle={handleSaveArticle}
                handleSignOutClick={handleSignOutClick}
                handleVisibleReset={handleVisibleReset}
                isLoading={isLoading}
                isOnProfile={isOnProfile}
                keyword={keyword}
                savedNewsArticles={savedNewsArticles}
                visible={visible}
              />
            </ProtectedRoute>
            <Route path="/">
              <Home
                handleDeleteArticle={handleDeleteArticle}
                handleFetchArticles={handleFetchArticles}
                handleProfileEnter={handleProfileEnter}
                handleSaveArticle={handleSaveArticle}
                handleSignInClick={handleSignInClick}
                handleSignOutClick={handleSignOutClick}
                isLoading={isLoading}
                newsCards={newsCards}
                savedNewsArticles={savedNewsArticles}
                showMoreItems={showMoreItems}
                visible={visible}
                keyword={keyword}
              />
            </Route>
          </Switch>
          <Footer />
          {isRegisterModalOpen && (
            <RegisterModal
              authError={authError}
              handleRegister={handleRegister}
              isActive={true}
              isLoading={isLoading}
              isOpen={isRegisterModalOpen}
              onClose={() => setIsRegisterModalOpen(false)}
              switchToSignIn={() => {
                setIsRegisterModalOpen(false);
                setIsSignInModalOpen(true);
              }}
            />
          )}
          {isSignInModalOpen && (
            <SignInModal
              authError={authError}
              handleLogin={handleLogin}
              isActive={true}
              isLoading={isLoading}
              isOpen={isSignInModalOpen}
              onClose={() => setIsSignInModalOpen(false)}
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
