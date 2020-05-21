import axios from "axios";

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
<<<<<<< HEAD

  addWeatherWidget: function (weatherData) {
    return axios.post("/api/user/widget", weatherData);
=======
  
  addUserWidget: (userID, widgetType, widgetData) => {
    return axios.post(
      "/api/user/widget",
      { 
        userID:  userID, 
        widgetType: widgetType, 
        widgetData: widgetData 
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      },
    );
>>>>>>> 62a3a6ae35aecee810d090bf89efa7b47e6e7857
  },
};
