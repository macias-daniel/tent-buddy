import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import WidgetBumper from "./WidgetBumper";
import ParkInfoContainer from "./ParkInfoContainer";
// can import style sheet
import { Image, Accordion, Segment } from "semantic-ui-react";
import NationalParksAPI from "../../utils/OpenWeatherMap";

function ParkWidget() {
  const [parkInfoData, setParkInfoData] = useState([]);
  const [parkInfo, setParkInfo] = useState([]);
  const [,] = useState([]);

  useEffect(() => {
    NationalParksAPI.getInfo().then(results => {
      // result.data.main.park info
      // set above constants
    });


    // this api call needs work
    // not sure about how the 180000 works or the reading.dt_txt
    // need helps implementing 
    NationalParksAPI.getAlerts().then(results => {
      // results.data.list.filter
      const dailyData = result.data.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00");
      });
    

      setPark(results.data.city.name)

      setParkInfoData( dailyData )
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
        )
      })
    )

    );
    // was weather now info?
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
            <p>

            </p>

          </Accordion.Title>
          <Accordion.Content active={clicked} onClick={clicked ? true : dontClick}>
            {parkInfo}            
          </Accordion.Content>
        </Accordion>
      </Segment>
    </>
  );
}
export default ParkWidget;