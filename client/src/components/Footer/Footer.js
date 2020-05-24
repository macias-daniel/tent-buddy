import React from "react";
import { Container, List, Segment, Grid } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <Grid centered>
        <Segment
          inverted
          style={{
            zIndex: "1",
            backgroundColor: "rgba(31, 38, 38, 0.95)",
            margin: "0em 0em 0em",
            padding: ".75em 0em",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          <Container
            style={{ textAlign: "center", margin: "0px", padding: "0px" }}
          >
            <List
              style={{ margin: "0px", padding: "0px" }}
              horizontal
              inverted
              divided
              link
              size="small"
            >
              {/* <Image
                style={{
                  margin: "auto 0",
                  height: "20px",
                  align:"center"
                }}
                className="headerLogo"
                alt="Tent logo"
                src="/Icons/favicon-32x32.png"
              /> */}
              <p style={{ margin: "0px", padding: "0px" }}>CONTACT US</p>
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
      </Grid>
    </div>
  );
}

export default Footer;
