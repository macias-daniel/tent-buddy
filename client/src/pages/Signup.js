import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, Segment, Grid } from "semantic-ui-react";


function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.name, formState.email, formState.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch(err => alert(err));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div>
      <Grid centered>
        <Segment centered raised compact inverted className="signUpForm">
          <h2 className="login">SIGN UP</h2>
          <Form size="small" inverted onSubmit={handleFormSubmit}>
            <Form.Field>
              <label>NAME</label>
              <Form.Input
                className="form-control"
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>EMAIL</label>
              <Form.Input
                className="form-control"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>PASSWORD</label>
              <Form.Input
                className="form-control"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
              <Grid.Row>
                <Form.Button className="MenuStyles">
                  <p >GET STARTED</p>
                </Form.Button>
                <p>Already have a buddy? 
                  <Link to="/login" className="MenuStyles"> login here.</Link>
                </p>
              </Grid.Row>
            </Form.Field>
          </Form>
        </Segment>
      </Grid>
    </div>
  );
}

export default Signup;
