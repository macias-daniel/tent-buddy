import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import { Grid } from "semantic-ui-react";
import WeatherWidget from "./ProfileWidgets/WeatherWidget";
import WidgetSorter from "./ProfileWidgets/WidgetSorter";
import WidgetBumper from "./ProfileWidgets/WidgetBumper";


function Profile() {
  const [widgets, setWidgets] = useState([]);
  const { user } = useAuth();

  const deleteWidget = widget => {
    API.deleteUserWidget(user.id, widget._id).then(() => {
      const newWidgetArray = widgets.filter(w => w._id !== widget._id);
      setWidgets(newWidgetArray);
    });
  };

  useEffect(() => {
    API.getUser(user.id).then(response => {
      setWidgets(response.data.widgets);
    });
  }, [user.id]);

  return (
    <div>
      <Grid centered>
        <WidgetSorter />
        {widgets.map(widget => {
          let component;

          //Depending on the widgets type return that widgets corresponding components
          if (widget.type === "note") {
            component = "Note Component";
          } else if (widget.type === "weather") {
            component = (
              <>
                <WidgetBumper
                  handleDeleteWidget={() => deleteWidget(widget)}
                />
                <WeatherWidget key={widget._id} city={widget.data.city} />
              </>
            );
          } else if (widget.type === "park") {
            component = "park Component";
          }
          return component;
        })}
        {/* Console.log widget so travis will shut up about unused variables */}
        {/* {console.log(widgets)} */}
      </Grid>
    </div>
  );
}

export default Profile;
