import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Segment, Grid, Image } from "semantic-ui-react";
import { useAuth } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <Grid centered>
        <Segment centered raised compact inverted className="loginForm">
          <h2 className="login">LOGIN</h2>
          <Form size="small" inverted onSubmit={handleFormSubmit}>
            <Form.Field>
              <label>USERNAME</label>
              <Form.Input
                className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>PASSWORD</label>
              <Form.Input
                className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Grid.Row>
                <Form.Button className="MenuStyles">
                  <p>EXPLORE</p>
                </Form.Button>
                <p>
                  <Link to="/signup">Go to Signup</Link>
                </p>
              </Grid.Row>
            </Form.Field>
          </Form>
        </Segment>
      </Grid>

      {/* <strong>onChange:</strong>
    <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
    <strong>onSubmit:</strong>
    <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre> */}
    </div>
  );
}

export default Login;
