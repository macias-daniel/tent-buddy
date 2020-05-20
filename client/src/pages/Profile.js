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
      const widgetsToRender = response.data.widgets;
      const widgetComponents = widgetsToRender.map((widget) => {
        if(widget.type === "note"){
          return "Note Component";
        } else if(widget.type === "weather"){
          return "weather Component";
        } else if(widget.type === "park"){
          return "park Component";
        }
      }); 
      setWidgets(widgetComponents);
      console.log(widgets);
      console.log(widgetComponents);
    });
  }, [user]);

  return (
    <div>å
      <Grid centered>
        <WidgetSorter />
      </Grid>
    </div>
  );
}

export default Profile;
