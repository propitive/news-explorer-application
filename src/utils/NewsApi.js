import { formattedDateToday, formattedDateSevenDaysAgo } from "./constants";
const BASE_URL = "https://nomoreparties.co/news/v2";
const apiKey = "f711c2fb93b14f3ca93a138e0ff635fe";

console.log("Today is: " + formattedDateToday());
console.log("Seven days ago was: " + formattedDateSevenDaysAgo());

const from = formattedDateSevenDaysAgo();
const to = formattedDateToday();

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
    const url = `${BASE_URL}/everything?q=${input}&from=${from}&to=${to}&apiKey=${apiKey}&pageSize=100`;
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
