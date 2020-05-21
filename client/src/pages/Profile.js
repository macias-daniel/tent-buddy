import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import { Grid } from "semantic-ui-react";
import WidgetSorter from "./ProfileWidgets/WidgetSorter";

function Profile() {
  const [widgets, setWidgets] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(response => {

      //Save the users list of widgets to render
      const widgetsToRender = response.data.widgets;

      //Saves and calculates an array of widget components
      const widgetComponents = widgetsToRender.map(widget => {
        let component;

        //Depending on the widgets type return that widgets corresponding components
        if (widget.type === "note") {
          component = "Note Component";
        } else if (widget.type === "weather") {
          component = "weather Component";
        } else if (widget.type === "park") {
          component = "park Component";
        }

        return component;
      });

      //Save the users widgets
      setWidgets(widgetComponents);
    });
  }, [user]);

  return (
    <div>
      <Grid centered>
        <WidgetSorter />
        {console.log(widgets)}
      </Grid>
    </div>
  );
}

export default Profile;
