import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { List, Segment, Grid, Container, Button } from "semantic-ui-react";
import "../CallToAction/CallToAction.css";

function CallToAction() {
  const { isLoggedIn } = useAuth();
  return (
    <div compact>
      <Grid style={{ margin: "0px" }} centered>
        {/* style={{marginTop:"100px" }} */}
        <Container
          compact
          className="intro"
          style={{ width: "325px", marginTop: "10px" }}
        >
          <Segment
            raised
            compact
            inverted
            className="intro2"
            style={{
              marginBottom: "0",
              background: "rgba(33, 187, 128, 0.78)",
              width: "85%",
              margin: "0 auto",
              color: "#F69C3C",
            }}
          >
            <h3
              style={{ fontFamily: "Bungee Inline", color: "white" }}
              className="introHead"
            >
              Why Tent Buddy?
            </h3>
          </Segment>
          <Segment
            raised
            compact
            inverted
            className="intro3"
            style={{
              marginTop: "0",
              width: "85%",
              margin: "0 auto",
              background: "#1b1c1d",
            }}
          >
            <p>
              Have you ever wanted a convenient place to look at important
              information needed for a smooth outdoors expedition?
              <br></br>
              <br></br>
              Tent Buddy is a widget application that provides a streamlined
              interface for users to be well informed before they head out on
              their next adventure.
            </p>
            <Link to={isLoggedIn ?"/profile": "/signup"}>
              <Button inverted animated>
                <Button.Content
                  visible
                  style={{ fontFamily: "Bungee Inline", color: "white" }}
                >
                  {" "}
                  Start Packing <br></br>{" "}
                </Button.Content>
                <Button.Content
                  style={{ fontFamily: "Bungee Inline", color: "black" }}
                  inverted
                  hidden
                >
                  SIGN UP NOW
                </Button.Content>
              </Button>
            </Link>
          </Segment>
        </Container>

        <Container
          compact
          className="features"
          style={{ width: "325px", marginTop: "10px" }}
        >
          <Segment
            raised
            compact
            inverted
            className="intro2"
            style={{
              marginBottom: "0",
              background: "rgba(33, 187, 128, 0.78)",
              width: "100%",
              margin: "0 auto",
              color: "#F69C3C",
            }}
          >
            <h3 style={{ fontFamily: "Bungee Inline", color: "white" }}>
              Key Features
            </h3>
          </Segment>
          <Segment
            raised
            compact
            inverted
            className="intro3"
            style={{
              marginTop: "0",
              background: "#1b1c1d",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <List
              bulleted
              style={{ color: "white", fontSize: "1.0rem", textAlign: "left" }}
            >
              <List.Item>Current and Five Day weather forecast</List.Item>
              <List.Item>Note taking functionality</List.Item>
              <List.Item>Park Operation hours</List.Item>
              <List.Item>Park Address</List.Item>
              <List.Item>Park Description</List.Item>
              <List.Item>Park Contact Information</List.Item>
              <List.Item>And more to come</List.Item>
            </List>
            <Link to={isLoggedIn ?"/profile": "/signup"}>
              <Button inverted animated>
                <Button.Content
                  visible
                  style={{ fontFamily: "Bungee Inline", color: "white" }}
                >
                  {" "}
                  BUILD YOUR TENT <br></br>{" "}
                </Button.Content>
                <Button.Content
                  style={{ fontFamily: "Bungee Inline", color: "black" }}
                  inverted
                  hidden
                >
                  SIGN UP NOW
                </Button.Content>
              </Button>
            </Link>
          </Segment>
        </Container>

        <Container
          compact

          style={{ width: "325px", marginTop: "10px" }}
        >
          <Segment
            raised
            compact
            inverted
            className="intro2"
            style={{
              marginBottom: "0",
              background: "rgba(33, 187, 128, 0.78)",
              width: "85%",
              margin: "0 auto",
              color: "#F69C3C",
            }}
          >
            <h3 style={{ fontFamily: "Bungee Inline", color: "white" }}>
              Our Mission
            </h3>
          </Segment>
          <Segment
            raised
            compact
            inverted
            className="intro3"
            style={{
              marginTop: "0",
              width: "85%",
              margin: "0 auto",
              background: "#1b1c1d",
            }}
          >
            <p style={{ fontFamily: "Roboto" }}>
              Tent Buddy was developed to provide individuals with the ability
              to keep track of a variety of widgets when embarking on an
              adventure in the great outdoors.{" "}
            </p>
            <Link to={isLoggedIn ?"/profile": "/signup"}>
              <Button inverted animated>
                <Button.Content
                  visible
                  style={{ fontFamily: "Bungee Inline", color: "white" }}
                >
                  {" "}
                  EXPLORE <br></br>{" "}
                </Button.Content>

                <Button.Content
                  style={{ fontFamily: "Bungee Inline", color: "black" }}
                  inverted
                  hidden
                >
                  SIGN UP NOW
                </Button.Content>
              </Button>
            </Link>
          </Segment>
        </Container>
      </Grid>
    </div>
  );
}

export default CallToAction;
