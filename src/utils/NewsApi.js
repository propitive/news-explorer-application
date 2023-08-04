import { formattedDateToday, formattedDateSevenDaysAgo } from "./constants";
const BASE_URL = "https://nomoreparties.co/news/v2";
const apiKey = "f711c2fb93b14f3ca93a138e0ff635fe";

const currentDate = new Date();
const currentDateString = currentDate.toLocaleDateString("sv-SE");
const weekPriorDateString = new Date(
  currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString("sv-SE");

const Api = {
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

  search: async ({ input }) => {
    const url = `${BASE_URL}/everything?q=${input}&from=${weekPriorDateString}&to=${currentDateString}&apiKey=${apiKey}&pageSize=100`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },
    };
    return await Api.request(url, options);
  },
};

export default Api;
