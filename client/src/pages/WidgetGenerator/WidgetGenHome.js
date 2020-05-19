import React, { useState } from "react";
import { Form, Segment, Grid, Menu } from "semantic-ui-react";
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
