import React from "react";
import Moment from "react-moment";
// import WidgetBumper from "./WidgetBumper"
import { Menu, Image } from "semantic-ui-react";

function ForecastContainer({ day, temp, icon }) {
  const iconSrc = "https://openweathermap.org/img/wn/" + icon + ".png";

  return (
    <>
      <Menu
        pointing
        secondary
        style={{
          height: "1px",
          margin: "0px",
          padding: "0px",
          fontSize: "10px",
        }}
      >
        <Menu.Item
          style={{
            fontWeight: "100",
            paddingBottom: "10px",
            color: "white",
            margin: "0px",
          }}
          className="forecastDay"
        >
          <Moment format="dddd">{day}</Moment>
          
        </Menu.Item>
        <Menu.Menu position="right" style={{ margin: "0px", padding: "0px" }}>
          <Menu.Item
            style={{
              fontWeight: "100",
              padding: "0px",
              color: "white",
              margin: "0px",
            }}
            className="forecastTemp"
          >
            <Image src={iconSrc} />
            {temp}°F
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default ForecastContainer;
