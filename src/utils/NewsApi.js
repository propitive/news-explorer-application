const BASE_URL = "https://nomoreparties.co/news/v2";
const apiKey = "f711c2fb93b14f3ca93a138e0ff635fe";

function formattedDateToday() {
  const d = new Date();
  const dayFirstCalc = d.getDate();

  const handleDayOutput = (days) => {
    if (days >= 10) {
      return dayFirstCalc;
    } else {
      return `0${dayFirstCalc}`;
    }
  };
  const day = handleDayOutput(dayFirstCalc);

  const monthOf = d.getMonth() + 1;
  const handleMonthOutput = (month) => {
    if (month >= 10) {
      return monthOf;
    } else {
      return `0${monthOf}`;
    }
  };
  const month = handleMonthOutput(monthOf);

  let result = "";
  result += d.getFullYear() + "-" + month + "-" + day;
  return result;
}

function formattedDateSevenDaysAgo() {
  const d = new Date();
  const last = new Date(d.getTime() - 7 * 24 * 60 * 60 * 1000);
  const dayFirstCalc = last.getDate();

  const handleDayOutput = (days) => {
    if (days >= 10) {
      return dayFirstCalc;
    } else {
      return `0${dayFirstCalc}`;
    }
  };
  const day = handleDayOutput(dayFirstCalc);

  const monthOf = d.getMonth() + 1;
  const handleMonthOutput = (month) => {
    if (month >= 10) {
      return monthOf;
    } else {
      return `0${monthOf}`;
    }
  };
  const month = handleMonthOutput(monthOf);

  let result = "";
  result += d.getFullYear() + "-" + month + "-" + day;
  return result;
}

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
