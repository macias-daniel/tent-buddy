import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, Segment, Grid, Menu } from "semantic-ui-react";
import WidgetSorter from "./WidgetSorter"

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div>
      <Grid centered>
        <Segment
          compact
          className="widgetTitle"
          style={{ backgroundColor: "rgba(144, 238, 144, 0)" }}
        >
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <Link to="/">Go home</Link>
          <h2 className="widgets">WIDGETS</h2>
        </Segment>
        <Segment centered raised compact inverted className="widgetForm">
          <WidgetSorter />
        </Segment>
      </Grid>
    </div>
  );
}

export default Profile;
