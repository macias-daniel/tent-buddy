import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Segment, Grid } from "semantic-ui-react";
import { useAuth } from "../utils/auth";
import ErrorSegment from "../components/ErrorSegment/ErrorSegment";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({isVisible: false, errorMessage: "" });

  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  //When the login form is submited
  const handleFormSubmit = event => {
    event.preventDefault();

    //Check that fields are not left empty
    if (email === "" || password === "") {
      return setError({isVisible: true, errorMessage:"login fields cannot be left empty"});
    }

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch(err => {
        setError({isVisible: true, errorMessage:err.response.data.message});
      });
  };

  return (
    <div>
      <Grid centered>
        <Segment centered raised compact inverted className="loginForm">
          <h2 className="login">LOGIN</h2>
          <Form size="small" inverted onSubmit={handleFormSubmit}>
            <Form.Field>
              <label>EMAIL</label>
              <Form.Input
                className="form-control"
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={({ target }) => {
                  setError({...error, isVisible:false});
                  setEmail(target.value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>PASSWORD</label>
              <Form.Input
                className="form-control"
                name="password"
                type="password"
                id="pwd"
                value={password}
                onChange={({ target }) => {
                  setError({...error, isVisible:false});
                  setPassword(target.value);
                }}
              />
              <Grid.Row>
                <Form.Button className="MenuStyles">
                  <p>EXPLORE</p>
                </Form.Button>

                {/* If an error is present, display it */}
                {error.isVisible && <ErrorSegment>{error.errorMessage}</ErrorSegment>}

                <p>
                  Need a your own buddy?
                  <Link className="MenuStyles" to="/signup">
                    {" "}
                    sign up here.
                  </Link>
                </p>
              </Grid.Row>
            </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
}

export default Login;
