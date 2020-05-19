import axios from "axios";
const SINGLE_URL =
  "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=irvine&&units=imperial&appid=3f3bd037aeac95efcd0304fb293c1edd";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=irvine&units=imperial&APPID=3f3bd037aeac95efcd0304fb293c1edd&cnt=40";

export default {

  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`);
  },

  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {
      username: username,
      email: email,
      password: password,
    });
  },
  
  getWeatherForecast: function () {
    return axios.get(BASE_URL);
  },

  getCurrent: function () {
    return axios.get(SINGLE_URL);
  },
};
