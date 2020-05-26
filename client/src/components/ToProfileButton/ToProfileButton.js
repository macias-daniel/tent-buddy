import React from "react";
import { Button } from "semantic-ui-react";
import "./ToProfileButton.css";

const ToProfileButton = () => {
  //take user to profile page
  const handleProfileButtonClick = () => {
    window.location.replace("/profile");
  };

  return (
    <Button
      secondary
      inverted
      fluid
      style={{ fontFamily: "Roboto", color: "white", marginTop: "10px" }}
      onClick={handleProfileButtonClick}
    >
      To Profile Page
    </Button>
  );
};

export default ToProfileButton;
