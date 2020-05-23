import React, { useState, useEffect } from "react";
import {
  Icon,
  Accordion,
  Segment,
} from "semantic-ui-react";
import NationalParksAPI from "../../utils/NationalParksAPI";

function ParkWidget( {key, state, park}) {

  console.log(state);
  console.log(park);
  // Api Data Hooks
  const [mon, setMon] = useState([]);
  const [tues, setTues] = useState([]);
  const [wed, setWed] = useState([]);
  const [thu, setThu] = useState([]);
  const [fri, setFri] = useState([]);
  const [sat, setSat] = useState([]);
  const [sun, setSun] = useState([]);
  const [phone, setPhone] = useState([]);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [name, setName] = useState([]);

  // page apperance Hooks
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndex1, setActiveIndex1] = useState(-1);
  const [activeIndex2, setActiveIndex2] = useState(-1);
  const [activeIndex3, setActiveIndex3] = useState(-1);
  const [activeIndex4, setActiveIndex4] = useState(-1);


  useEffect(() => {
    // must take state and park
    NationalParksAPI.getInfo(park, state).then(results => {
      
      // main path for nationalParksApi data
      const starter = results.data.data[0];
      
      // returns for hours
      const hoursstarter = starter.operatingHours[0].standardHours;
      const mondayHours = hoursstarter.monday;
      const tuesdayHours = hoursstarter.tuesday;
      const wednesdayHours = hoursstarter.wednesday;
      const thursdayHours = hoursstarter.thursday;
      const fridayHours = hoursstarter.friday;
      const saturdayHours = hoursstarter.saturday;
      const sundayHours = hoursstarter.sunday;
            
      // return for phone number
      const phoneNumber = starter.contacts.phoneNumbers[0].phoneNumber;
      
      // return for parkDescription
      const parkDescription = starter.directionsInfo;
      
      // return for urlPath
      const urlPath = starter.url;
      
      // latLong returns
      const longitutdePath = starter.longitude;
      const latitudePath = starter.latitude;
      
      setMon(mondayHours);
      setTues(tuesdayHours);
      setWed(wednesdayHours);
      setThu(thursdayHours);
      setFri(fridayHours);
      setSat(saturdayHours);
      setSun(sundayHours);
      setPhone(phoneNumber);
      setDescription(parkDescription);
      setUrl(urlPath);
      setLat(longitutdePath);
      setLon(latitudePath);
      setName(starter.name);
    });
  }, [key, state, park]);

  
  // handle popdown clicks
  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }
  function handleClick1() {
    const newIndex1 = activeIndex1 === -1 ? 0 : -1;
    setActiveIndex1(newIndex1);
  }
  function handleClick2() {
    const newIndex2 = activeIndex2 === -1 ? 0 : -1;
    setActiveIndex2(newIndex2);
  }
  function handleClick3() {
    const newIndex3 = activeIndex3 === -1 ? 0 : -1;
    setActiveIndex3(newIndex3);
  }
  function handleClick4() {
    const newIndex4 = activeIndex4 === -1 ? 0 : -1;
    setActiveIndex4(newIndex4);
  }

  return(
    <Segment attached inverted compact
      style={{ width: "225px",backgroundColor: "rgba(27, 27, 27, 0.76)" }}
    >
      <Segment attached inverted>


        {/* Accordion For all Sub Accordions */}
        <Accordion >

          {/* Park Name Segment */}
          <Segment inverted 
            style={{ fontWeight: "500", color: "white", fontFamily: "Roboto",
              paddingTop: "0", paddingBottom: "0"}}
          >
            <h2>{name}</h2>
          </Segment>

          {/* Accordion For Hours */}
          <Accordion>
            {/* Accordion Title For Hours */}
            <Accordion.Title 
              onClick={handleClick} 
              index={0}
              active={activeIndex === 0}
            >
              <div
                className="tempInfo"
                style={{ float: "left", fontWeight: "bold", fontSize: "15px",}}
              >
                {" "}
                      Hours of Operation <span>&nbsp;&nbsp;</span>
                <p 
                  style={{ float: "right", fontWeight: "100" }}
                >
                  {" "}
                  <Icon
                    name="plus square outline"
                    inverted
                  />
                </p>
              </div>
              <br></br>
            </Accordion.Title>
            {/* Accordion Content For Hours */}
            <Accordion.Content 
              style={{ margin: "0px" }} 
              active={activeIndex === 0}>
              <Segment inverted
                style={{fontWeight: "400", color: "white", fontFamily: "Roboto", 
                  paddingTop: "0", paddingBottom: "1rem",}}
              >
                {/* Hours From API Displayed */}
                <div>
                  <h5>Mon: {mon}</h5>
                  <h5>Tues: {tues}</h5>
                  <h5>Wed: {wed}</h5>
                  <h5>Thu: {thu}</h5>
                  <h5>Fri: {fri}</h5>
                  <h5>Sat: {sat}</h5>
                  <h5>Sun: {sun}</h5>
                </div>
              </Segment>
            </Accordion.Content>
          </Accordion>

          {/* Accordion for Park Description */}
          <Accordion>
            {/* Accordion Title For Description */}
            <Accordion.Title
              onClick={handleClick1}
              index={0}
              active={activeIndex1 === 0}
            >
              <div
                className="tempInfo"
                style={{float: "left", fontWeight: "bold", fontSize: "15px",}}
              >
                {" "}
              Park Description <span>&nbsp;&nbsp;</span>
                <p 
                  style={{ float: "right", fontWeight: "100" }}
                >
                  {" "}
                  <Icon
                    name="plus square outline"
                    inverted
                  />
                </p>
              </div>
              <br></br>
            </Accordion.Title>
            {/* Accordion Content For Description */}
            <Accordion.Content 
              active={activeIndex1 === 0}
              style={{ margin: "0px" }} 
            >
              <Segment inverted
                style={{fontWeight: "600", color: "white", fontFamily: "Roboto",
                  paddingTop: "0", paddingBottom: "1rem",}}
              >
                {/* Description From API Displayed */}
                <p>
                Description:<span>&nbsp;&nbsp;</span>
                  {description}
                </p>
              </Segment>
            </Accordion.Content>
          </Accordion>


          {/* Accordion for Lat and Lon */}
          <Accordion defaultActiveKey="0">
            {/* Accordion Title For Lat and Long */}
            <Accordion.Title
              onClick={handleClick2}
              index={1}
              active={activeIndex2 === 0}
            >
              <div
                className="tempInfo"
                style={{float: "left", fontWeight: "bold", fontSize: "15px",}}
              >
                {" "}
              Lat and Lon <span>&nbsp;&nbsp;</span>
                <p 
                  style={{ float: "right", fontWeight: "100" }}
                >
                  {" "}
                  <Icon
                    name="plus square outline"
                    inverted
                  />
                </p>
              </div>
              <br></br>
            </Accordion.Title>
            {/* Accordion Content For Lat and Long */}
            <Accordion.Content 
              active={activeIndex2 === 0}
              style={{ margin: "0px" }}>
              <Segment inverted
                style={{margin: "0px", fontWeight: "100", padding: "0px",}}
              >
                {/* Lat and Long */}  
                <p>
                Latitude:<span>&nbsp;&nbsp;</span>
                  {lat}
                </p>
                <p>
                Longitude:<span>&nbsp;&nbsp;</span>
                  {lon}
                </p>
              </Segment>
            </Accordion.Content>
          </Accordion>

          {/* Contact Park Accordian */}
          <Accordion defaultActiveKey="0">
            {/* Accordion Title For Contact */}
            <Accordion.Title
              onClick={handleClick3}
              index={1}
              active={activeIndex3 === 0}
            >
              <div
                className="tempInfo"
                style={{float: "left", fontWeight: "bold", fontSize: "15px",}}
              >
                {" "}
                        Contact Park <span>&nbsp;&nbsp;</span>
                <p 
                  style={{ float: "right", fontWeight: "100" }}
                >
                  {" "}
                  <Icon
                    name="plus square outline"
                    inverted
                  />
                </p>
              </div>
              <br></br>
            </Accordion.Title>
            {/* Accordion Content For Contact */}
            <Accordion.Content 
              active={activeIndex3 === 0}
              style={{ margin: "0px" }}>
              <Segment inverted
                style={{margin: "0px", fontWeight: "100", padding: "0px",}}
              >
                {/* Display Phone from API */}  
                <p>
                Phone :<span>&nbsp;&nbsp;</span>
                  {phone}
                </p>
              </Segment>
            </Accordion.Content>
          </Accordion>

          {/* Accordion for Park URL */}
          <Accordion defaultActiveKey="0">
            {/* Accordion Title for Park URL */}
            <Accordion.Title
              onClick={handleClick4}
              index={1}
              active={activeIndex4 === 0}
            >
              <div
                className="tempInfo"
                style={{float: "left", fontWeight: "bold", fontSize: "15px",}}
              >
                {" "}
                        Park Website <span>&nbsp;&nbsp;</span>
                <p 
                  style={{ float: "right", fontWeight: "100" }}
                >
                  {" "}
                  <Icon
                    name="plus square outline"
                    inverted
                  />
                </p>
              </div>
              <br></br>
            </Accordion.Title>
            {/* Accordion Content for Park URL */}
            <Accordion.Content 
              active={activeIndex4 === 0}
              style={{ margin: "0px" }}> 
              <Segment inverted
                style={{margin: "0px", fontWeight: "100", padding: "0px",}}
              >
                {/* Display URL from API */}  
                <a href={url} rel="noopener noreferrer" target="_blank" style={{fontSize: "10px"}}>
                  <span>&nbsp;&nbsp;</span>
                  {name} website
                </a>
              </Segment>
            </Accordion.Content>
          </Accordion>
        </Accordion>
      </Segment>
    </Segment>
  );
}
export default ParkWidget;
