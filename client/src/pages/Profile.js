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
      console.log(user);
      const widgetsToRender = response.data.widget;
      const widgetList = [];
      Object.keys(widgetsToRender).forEach(key => {
        widgetsToRender[key].forEach(item => {
          
          //Push note component with note data
          if(key === "note"){
            console.log("Note");
            widgetList.push(item);
          
          //Push weather component with weather data
          } else if(key === "weather"){
            console.log("weather");
            widgetList.push(item);

          //Push park component with park data
          }else if(key === "park"){
            console.log("park");
            widgetList.push(item);
          }
        });
      });
      setWidgets(widgetList);
      
    });
  }, [user]);

  return (
    <div>
      <Grid centered>
        {/* <Segment
          compact
          className="widgetTitle"
          style={{ backgroundColor: "rgba(144, 238, 144, 0)" }}
        >
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <Link to="/">Go home</Link>
        </Segment> */}
        <WidgetSorter />
      </Grid>
    </div>
  );
}

export default Profile;
