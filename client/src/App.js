import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Our Components
import { AuthProvider, useAuth } from "./utils/auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CallToAction from "./pages/CallToAction/CallToAction.js";
import Contact from "./pages/Contact/Contact";
import WidgetGenHome from "./pages/WidgetGenerator/WidgetGenHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/signup" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="homeContainer">
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/aboutus">
              <CallToAction/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <Route exact path="/widgetGenerator">
              <WidgetGenHome />
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
