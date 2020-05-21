import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Segment, Grid } from "semantic-ui-react";

import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import ErrorSegment from "../components/ErrorSegment/ErrorSegment";

function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({isVisible: false, errorMessage: "" });

  const { isLoggedIn } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    
    //Check that no fields are left empty 
    if (
      formState.name === "" ||
      formState.email === "" ||
      formState.password === ""
    ) {
      return setError({isVisible: true, errorMessage:"login fields cannot be left empty"});
    }

    API.signUpUser(formState.name, formState.email, formState.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch(() => {
        //Set the error to visible
        setError({isVisible: true, errorMessage:"That email is already in use"});
      });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    //If the error message is set to visible hide it
    setError({...error, isVisible:false});
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
                  <p>GET STARTED</p>
                </Form.Button>
          
                {/* If an error is present, display it */}
                {error.isVisible && <ErrorSegment>{error.errorMessage}</ErrorSegment>}

                <p>
                  Already have a buddy?
                  <Link to="/login" className="MenuStyles">
                    {" "}
                    login here.
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

export default Signup;
