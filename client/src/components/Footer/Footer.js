import React from "react";
import {
  Container,
  List,
  Segment,
  Image,
} from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <Segment
        inverted
        vertical
        style={{
          margin: "2em 0em 0em",
          padding: "0em 0em",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container textAlign="center">
          <Image
            centered
            className="headerLogo"
            alt="Tent logo"
            src="/Icons/favicon-32x32.png"
          ></Image>

          <List horizontal inverted divided link size="small">
            <p>CONTACT US</p>{" "}
            <List.Item
              horizontal
              as="a"
              href="https://github.com/macias-daniel"
            >
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
