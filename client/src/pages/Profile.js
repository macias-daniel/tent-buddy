import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import { Grid, Container } from "semantic-ui-react";
import WeatherWidget from "./ProfileWidgets/WeatherWidget";
// import WidgetSorter from "./ProfileWidgets/WidgetSorter";
import WidgetBumper from "./ProfileWidgets/WidgetBumper";
import ParkWidget from "./ProfileWidgets/ParkWidget";
import TrailWidget from "./ProfileWidgets/TrailWidget";

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
      <Grid style={{ margin: "0px" }} centered>
        {/* <WidgetSorter /> */}
        {widgets.map(widget => {
          let component;

          //Depending on the widgets type return that widgets corresponding components
          if (widget.type === "note") {
            component = "Note Component";
          } else if (widget.type === "weather") {
            component = (
              <>
                <Container>
                  <WidgetBumper
                    handleDeleteWidget={() => deleteWidget(widget)}
                  />
                  <WeatherWidget
                    key={widget._id}
                    city={widget.data.city}
                  />
                </Container>
              </>
            );
          } else if (widget.type === "park") {
            component = (
              <>
                <Container>
                  <WidgetBumper
                    handleDeleteWidget={() => deleteWidget(widget)}
                  />
                  <ParkWidget
                    key={widget._id}
                    state={widget.data.state}
                    park={widget.data.park}
                  />
                </Container>
              </>
            );
          } else if (widget.type === "trails") {
            component = (
              <>
                <Container>
                  <WidgetBumper
                    handleDeleteWidget={() => deleteWidget(widget)}
                  />
                  <TrailWidget
                    key={widget._id}
                    name={widget.data.name}
                    src={widget.data.src}
                    lat={widget.data.lat}
                    lon={widget.data.lon}
                    stars={widget.data.star}
                    url={widget.data.url}
                  />
                </Container>
              </>
            );
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
