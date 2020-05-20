import React from "react";
import { Container, Icon, List, Segment } from "semantic-ui-react";

function Footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          margin: "5em 0em 0em",
          padding: "5em 0em",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container textAlign="center">
          <h2 className="HeaderTitle">
            Tent Buddy
            <Icon name="tree" />
          </h2>
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
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
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
