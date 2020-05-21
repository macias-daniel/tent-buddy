import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import WidgetBumper from "./WidgetBumper";
import ParkInfoContainer from "./ParkInfoContainer";
// can import style sheet
import { Accordion, Segment } from "semantic-ui-react";
import NationalParksAPI from "../../utils/OpenWeatherMap";

function ParkWidget() {
  const [parkInfoData, setParkInfoData] = useState([]);
  const [parkInfo, setParkInfo] = useState([]);
  const [park, setPark] = useState([]);
  const [hours, setHours] = useState([]);
  const [phone, setPhone] = useState([]);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState([]);
  const [address, setAddress] = useState([]);
  const [latlon, setLatlon] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    NationalParksAPI.getInfo().then(results => {
      setHours(results);
      setPhone(results);
      setDescription(results);
      setUrl(results);
      setAddress(results);
      setLatlon(results);
      // result.data.main.park info
      // set above constants
    });


    // this api call needs work
    // not sure about how the 180000 works or the reading.dt_txt
    // need helps implementing 
    NationalParksAPI.getAlerts().then(results => {
      // results.data.list.filter
      const dailyData = results.data.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00");
      });

      // setAlertTitle(results);
      // setAlertCategory(results);
      // setAlertDescription(results);
      setPark(results.data.city.name);
      setParkInfoData( dailyData );
    });
  }, []);

  const dateToFormat = new Date();

  useEffect(() => {
    setParkInfo(
      parkInfoData.map(weatherData => {
        return (
          <ParkInfoContainer

          // was icon temp and day
          // now its park info 
          // hours of operation
          // phone number
          // park description
          // park url
          // park address
          // lat and longigute
          // alerts title
          // alerts category
          // alerts description
          />
        );
      }),
    );
  }, [parkInfoData]);

  function doClick() {
    setClicked(true);
  }
  
  function dontClick() {
    setClicked(false);
  }
  return(
    <>
      <WidgetBumper/>
      <Segment attached inverted style={{ width: "225px"}}>
        <Accordion>
          <Accordion.Title index={0} onClick={clicked ? undefined : doClick}>
            <p style={{ float: "right", fontWeight: "100" }}>
              <div>
                <h4>Hours: {hours}</h4>
              </div>
            </p>
            <p className="tempCity">{park}</p>
            <p className="tempDate">
              <Moment format="dddd MM.DD" style={{ color: "white" }}>
                {dateToFormat}
              </Moment>
            </p>
            {/* phone number */}
            <p className="temp" style={{ color: "white" }}>
              {phone}
            </p>
            {/* url */}
            <div style={{ textAlign: "left", fontWeight: "bold" }}>
              URL: {url}
          
            </div>
            <p className="wind">
              Address:<span>&nbsp;&nbsp;</span>
              {address} MPH{" "}
            </p>
            <br></br>

            <div
              className="tempInfo"
              style={{ float: "left", fontWeight: "bold" }}
            >
              {" "}
              {/* description */}
              DESCRIPTION: <span>&nbsp;&nbsp;</span>
              <p style={{ float: "right", fontWeight: "100" }}>
                {" "}
                {description}
              </p>
            </div>
            <br></br>

            <div
              className="tempInfo"
              style={{ float: "left", fontWeight: "bold" }}
            >
              {" "}
              {/* lat lon */}
              Lat Lon: <span>&nbsp;&nbsp;</span>
              <p style={{ float: "right", fontWeight: "100" }}>
                {" "}
                {latlon} 
              </p>
            </div>
            <br></br>
          </Accordion.Title>
          <Accordion.Content 
            active={clicked} 
            onClick={clicked ? true : dontClick}
          >
            {parkInfo}            
          </Accordion.Content>
        </Accordion>
      </Segment>
    </>
  );
}
export default ParkWidget;
