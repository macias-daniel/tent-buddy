import React from "react";
import { Grid, Container } from "semantic-ui-react";
import WidgetGeneratorSort from "./WidgetGenSort";

function WidgetHome() {
  return (
    <Grid compact centered style={{ margin: "0px", padding: "0px" }}>
      <Container
        className="widgetGenHome"
        style={{
          backgroundColor: "rgba(33, 187, 128, 0)",
          marginBottom: "0px",
        }}
      >
        <h2
          style={{
            marginBottom: "0px",
            padding: "0px",
            fontFamily: "Bungee",
            color: "white",
          }}
        >
          Widget Generator
        </h2>
        <p
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "Bungee",
            color: "white",
          }}
        >
          pick a category
        </p>
      </Container>

      <WidgetGeneratorSort />
    </Grid>
  );
}

export default WidgetHome;
