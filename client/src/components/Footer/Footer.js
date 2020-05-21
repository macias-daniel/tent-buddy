import React from "react";
import { Container, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          margin: "2em 0em 0em",
          padding: "1em 0em 2em 0em",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container textAlign="center">
          <div className="row">
            <div className="column">
              <img
                className="headerLogo"
                alt="Tent logo"
                src="/Icons/favicon-32x32.png"
              ></img>
            </div>
            <div className="column">
              <List horizontal inverted divided link size="small">
                <List.Item as= {Link} to="/contact">
                  Contact Us
                </List.Item>
                <List.Item as="a" href="https://github.com/macias-daniel">
                  @macias-daniel
                </List.Item>
                <List.Item as="a" href="https://github.com/charrmountain">
                  @charrmountain
                </List.Item>
                <List.Item as="a" href="https://github.com/NathanNaylor">
                  @NathanNaylor
                </List.Item>
                <List.Item as="a" href="https://github.com/kanercruzwalker">
                  @kanercruzwalker
                </List.Item>
              </List>
            </div>
          </div>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
