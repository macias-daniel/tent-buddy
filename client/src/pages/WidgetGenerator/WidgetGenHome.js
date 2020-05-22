import React from "react";
import { Grid } from "semantic-ui-react";
import WidgetGeneratorSort from "./WidgetGenSort";
import Footer from "../../components/Footer/Footer";

function WidgetHome() {
  return (
    <div>
      <Grid centered>
        <WidgetGeneratorSort />
      </Grid>
    </div>
  );
}

export default WidgetHome;
