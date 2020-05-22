import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
import {
  Icon,
  Step,
  Input,
  Accordion,
  Dimmer,
  Loader,
  Segment,
  Table,
  Header,
  Button,
} from "semantic-ui-react";
import NationalParksAPI from "../../utils/NationalParksAPI";
import API from "../../utils/API";

function ParkWidgetGen() {
  // search Hooks
  const { user } = useAuth();
  const [parkSearch, setPark] = useState("");
  const [stateSearch, setStateSearch] = useState("");

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
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState([]);
  const [button, setButton] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setSpinner(
      <Step.Group>
        <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
          <Icon name="tree" style={{ color: "white" }} />
          <Step.Content>
            <Step.Title style={{ color: "white", fontFamily: "Roboto" }}>
              PARKS
            </Step.Title>
            <Step.Description
              style={{
                fontWeight: "100",
                color: "white",
                fontFamily: "Roboto",
              }}
            >
              ENTER A PARK
            </Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    );
    setButton("Add Widget");
  }, []);

  function handleParkSearch() {
    setSpinner(
      <Dimmer active>
        <Loader/>
      </Dimmer>
    );


    NationalParksAPI.getInfo(stateSearch, parkSearch).then(results => {
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

      // const parkName = 

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

      setSpinner("");
      setShowText(!showText);
    });
  }
  
  const addParkWidget = event => {
    event.preventDefault();
    setButton("Widget Added");
    API.addUserWidget(user.id,"park", {park: setPark})
      .catch(err => alert(err));
  };

  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }

  return (
    <div>
      <br />
      <Segment
        attached
        block
        inverted
        style={{ backgroundColor: "rgba(27, 27, 27, 0.76)", width: "250px" }}
      >
        <Input
          style={{ margin: "10px" }}
          icon={<Icon name="search" inverted circular link onClick={handleParkSearch} />
          }
          placeholder="ENTER PARK"
          onChange={event => {
            setSpinner(
              <Step.Group>
                <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
                  <Icon name="cloud" style={{ color: "white" }} />
                  <Step.Content>
                    <Step.Title
                      style={{ color: "white", fontFamily: "Roboto" }}
                    >
                      PARK
                    </Step.Title>
                    <Step.Description
                      style={{
                        fontWeight: "100",
                        color: "white",
                        fontFamily: "Roboto",
                      }}
                    >
                      ENTER A PARK
                    </Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>,
            );
            setButton("Add Widget");
            setShowText("");
            setPark(event.target.value.toUpperCase());
          }}

        />

        <Segment
          compact
          attached
          style={{
            width: "225px",
            backgroundColor: "rgba(27, 27, 27, 0.76)",
          }}
        >
          {showText && (
            <>
              <Segment attached inverted>
                <Accordion defaultActiveKey="0">

                  {/* Park Name Segment */}
                  <Segment inverted 
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontFamily: "Roboto",
                      paddingTop: "0",
                      paddingBottom: "0"
                    }}>
                    <h2>{name}</h2>
                  </Segment>

                  
                  <Accordion.Title
                    onClick={handleClick}
                    index={0}
                    active={activeIndex === 0}
                  >
                    <div
                      className="tempInfo"
                      style={{
                        float: "left",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
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
                  <Accordion.Content style={{ margin: "0px" }} active={activeIndex === 0}>
                    <Segment inverted
                      style={{
                        fontWeight: "400",
                        color: "white",
                        fontFamily: "Roboto",
                        paddingTop: "0",
                        paddingBottom: "1rem",

                      }}>
                      {/* hours */}
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


                {/* accordian for park description */}
                <Accordion defaultActiveKey="0">
                  <Accordion.Title
                    onClick={handleClick}
                    index={1}
                    active={activeIndex === 0}
                  >
                    <div
                      className="tempInfo"
                      style={{
                        float: "left",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
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
                  <Accordion.Content style={{ margin: "0px" }} active={activeIndex === 0}>
                    <Segment inverted
                      style={{
                        fontWeight: "600",
                        color: "white",
                        fontFamily: "Roboto",
                        paddingTop: "0",
                        paddingBottom: "1rem",

                      }}>
                      {/* Description */}
                      <p>
                      Description:<span>&nbsp;&nbsp;</span>
                        {description}
                      </p>
                    </Segment>
                  </Accordion.Content>
                </Accordion>


                {/* accordian for lat lon */}
                <Accordion defaultActiveKey="0">
                  <Accordion.Title
                    onClick={handleClick}
                    index={1}
                    active={activeIndex === 0}
                  >
                    <div
                      className="tempInfo"
                      style={{
                        float: "left",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
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
                  <Accordion.Content style={{ margin: "0px" }} active={activeIndex === 0}>
                    <Segment inverted
                      style={{
                        margin: "0px",
                        fontWeight: "100",
                        padding: "0px",
                      }}>
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
                  <Accordion.Title
                    onClick={handleClick}
                    index={1}
                    active={activeIndex === 0}
                  >
                    <div
                      className="tempInfo"
                      style={{
                        float: "left",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
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
                  <Accordion.Content style={{ margin: "0px" }} active={activeIndex === 0}>
                    <Segment inverted
                      style={{
                        margin: "0px",
                        fontWeight: "100",
                        padding: "0px",
                      }}>
                      {/* Lat and Long */}  
                      <p>
                      Phone :<span>&nbsp;&nbsp;</span>
                        {phone}
                      </p>
                    </Segment>
                  </Accordion.Content>
                </Accordion>

                {/* Park Website */}
                <Accordion defaultActiveKey="0">
                  <Accordion.Title
                    onClick={handleClick}
                    index={1}
                    active={activeIndex === 0}
                  >
                    <div
                      className="tempInfo"
                      style={{
                        float: "left",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
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
                  <Accordion.Content style={{ margin: "0px" }} active={activeIndex === 0}>
                    <Segment inverted
                      style={{
                        margin: "0px",
                        fontWeight: "100",
                        padding: "0px",
                      }}>
                      {/* url */}  
                      <p>
                      Url:<span>&nbsp;&nbsp;</span>
                        {url}
                      </p>
                    </Segment>
                  </Accordion.Content>
                </Accordion>
                
              </Segment>
              
              <Button
                secondary
                inverted
                fluid
                style={{ fontFamily: "Roboto", color: "white" }}
                onClick={addParkWidget}
              >
                {button}
              </Button>
            </>
          )},
          {spinner}
        </Segment>
      </Segment>
    </div>
  );
}
export default ParkWidgetGen;
