import Api from "./NewsApi";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.news-explorer.okzk.com"
    : "http://localhost:3001";

const MainApi = {
  request: async (url, options = {}) => {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    }
    const error = new Error(
      `Error ${response.status}: ${await response.text()}`
    );
    throw error;
  },

  checkToken: async (token) => {
    const url = `${BASE_URL}/users/me`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  deleteArticle: async (articleId, token) => {
    const url = `${BASE_URL}/articles/${articleId}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  getArticles: async (token) => {
    const url = `${BASE_URL}/articles`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  getUser: async (token) => {
    const url = `${BASE_URL}/users/me`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  saveArticle: async (
    { keyword, title, text, date, source, link, image },
    token
  ) => {
    const url = `${BASE_URL}/articles`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    };
    return await Api.request(url, options);
  },

  signIn: async ({ email, password }) => {
    const url = `${BASE_URL}/signin`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    return await Api.request(url, options);
  },

  signUp: async ({ name, avatar, email, password }) => {
    const url = `${BASE_URL}/signup`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, avatar, email, password }),
    };
    return await Api.request(url, options);
  },
};

export default MainApi;
