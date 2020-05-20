import axios from "axios";

// const query = "irvine"

// const SINGLE_URL =
//   "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + query + "&&units=imperial&appid=3f3bd037aeac95efcd0304fb293c1edd";

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&units=imperial&APPID=3f3bd037aeac95efcd0304fb293c1edd&cnt=40";

export default {

  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("id_token")}` },
    });
  },

  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post(
      "api/signup",
      {
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      },
    );
  },
};
