import React from "react";
import Moment from "react-moment";
// import WidgetBumper from "./WidgetBumper"
import { Menu, Image } from "semantic-ui-react";

function ForecastContainer({ day, temp, icon }) {
  const iconSrc = "https://openweathermap.org/img/wn/" + icon + ".png";

  return (
    <>
    <Menu secondary
      style={{
        height: "1px",
        marginTop: "0px",
        marginBottom: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        fontSize: "12px",
      }}>
        <Menu.Item style={{ textAlign: "left" }}>
        <Moment format="dddd" style={{marginLeft:"0px",color:"white", fontFamily:"Roboto", textAlign: "left" }}>
            {day}
          </Moment>
          </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item position='right' style={{ color:"white", fontFamily:"Roboto"}}> 
          <Image position='right' src={iconSrc} />
         <p position='right' style={{fontSize: "15px",}}>{temp}°F</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      
      {/* <Menu
        pointing
        secondary
        style={{
          height: "10px",
          margin: "0px",
          padding: "0px",
          fontSize: "10px",
        }}
      >
        <Menu.Item
          style={{
            fontWeight: "100",
            paddingBottom: "10px",
            margin: "0px",
            padding: "0px",
            color: "white",
          }}
          className="forecastDay"
        >
          <Moment format="dddd" style={{ textAlign: "right" }}>
            {day}
          </Moment>
        </Menu.Item>
          <Menu.Item
          position
            style={{
              fontWeight: "100",
              padding: "0px",
              color: "white",
              margin: "0px",
            }}
            className="forecastTemp"
          >
            <Image style={{ textAlign: "left" }} src={iconSrc} />
            {temp}°F
          </Menu.Item>

      </Menu> */}
    </>
  );
}

export default ForecastContainer;
