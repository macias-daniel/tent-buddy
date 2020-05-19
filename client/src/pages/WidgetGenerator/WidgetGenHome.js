import React from "react";
import { Grid } from "semantic-ui-react";
import WidgetGeneratorSort from "./WidgetGeneratorSort";

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
