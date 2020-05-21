import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";

import registerServiceWorker from "./registerServiceWorker";

// Here is if we have an id_token in localStorage
// if (localStorage.getItem("id_token")) {
//   // then we will attach it to the headers of each request from react
//   // application via axios
//   axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("id_token")}`;
// }

ReactDOM.render(
  <React.StrictMode>
    <div className="homeContainer">
      <App />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root"),
);

registerServiceWorker();
