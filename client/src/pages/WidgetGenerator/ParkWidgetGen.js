import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
import {
  Icon,
  Grid,
  Step,
  Input,
  Accordion,
  Dimmer,
  Loader,
  Segment,
  Button,
  Dropdown,
} from "semantic-ui-react";
import NationalParksAPI from "../../utils/NationalParksAPI";
import API from "../../utils/API";
import faker from "faker";
import _ from "lodash";

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
  const [activeIndex1, setActiveIndex1] = useState(-1);
  const [activeIndex3, setActiveIndex3] = useState(-1);
  const [activeIndex4, setActiveIndex4] = useState(-1);

  useEffect(() => {
    setSpinner(
      <Step.Group>
        <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
          <Icon name="tree" style={{ color: "white" }} />
          <Step.Content>
            <Step.Title style={{ color: "white", fontFamily: "Bungee" }}>
              PARKS
            </Step.Title>
            <Step.Description
              style={{
                fontWeight: "100",
                color: "white",
              }}
            >
              <p style={{ fontSize: "10px" }}>
                {" "}
                PICK YOUR STATE <br></br>SEARCH BY PARK
              </p>
              <p style={{ fontSize: "10px" }}> RECEIVE INFORMATION</p>
            </Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>,
    );
    setButton("Add Widget");
  }, []);

  function handleParkSearch() {
    setSpinner(
      <Dimmer active>
        <Loader />
      </Dimmer>,
    );

    NationalParksAPI.getInfo(parkSearch, stateSearch).then(results => {
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
      const longitutdePath = parseInt(starter.longitude);
      const latitudePath = parseInt(starter.latitude);

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
    API.addUserWidget(user.id, "park", {
      park: parkSearch,
      state: stateSearch,
    }).catch(err => alert(err));
  };

  // handle popdown clicks
  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }
  function handleClick1() {
    const newIndex1 = activeIndex1 === -1 ? 0 : -1;
    setActiveIndex1(newIndex1);
  }
  function handleClick3() {
    const newIndex3 = activeIndex3 === -1 ? 0 : -1;
    setActiveIndex3(newIndex3);
  }
  function handleClick4() {
    const newIndex4 = activeIndex4 === -1 ? 0 : -1;
    setActiveIndex4(newIndex4);
  }

  // Dropdown text values
  const addressDefinitions = faker.definitions.address;
  const stateOptions = _.map(addressDefinitions.state_abbr, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index],
  }));

  // Page Being Returned
  return (
    <div>
      <Grid centered style={{ margin: "0px" }}>
        <br />
        <Segment
          attached
          block
          inverted
          style={{
            marginTop: "25px",
            backgroundColor: "rgba(27, 27, 27, 0.76)",
            width: "250px",
          }}
        >
          {/* Segment For State Dropdown */}
          <Segment style={{ backgroundColor: "rgba(27, 27, 27, 0.76)" }}>
            <Dropdown
              placeholder="STATE"
              search
              selection
              options={stateOptions}
              onChange={event => {
                // Set State Hook
                setStateSearch(event.target.textContent);
              }}
            />
          </Segment>

          {/* Segment For Park Input */}
          <Input
            style={{ margin: "10px" }}
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
                onClick={handleParkSearch}
              />
            }
            placeholder="ENTER PARK"
            onChange={event => {
              setSpinner(
                <Step.Group>
                  <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
                    <Icon name="tree" style={{ color: "white" }} />
                    <Step.Content>
                      <Step.Title
                        style={{ color: "white", fontFamily: "Bungee" }}
                      >
                        PARKS
                      </Step.Title>
                      <Step.Description
                        style={{
                          fontWeight: "100",
                          color: "white",
                        }}
                      >
                        <p style={{ fontSize: "10px" }}>
                          {" "}
                          PICK YOUR STATE <br></br>SEARCH BY PARK
                        </p>
                        <p style={{ fontSize: "10px" }}> RECEIVE INFORMATION</p>
                      </Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>,
              );
              setButton("Add Widget");
              setShowText("");

              // Set Park Hook
              setPark(event.target.value.toLowerCase());
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
                  {/* Accordion For all Sub Accordions */}
                  <Accordion>
                    {/* Park Name Segment */}
                    <Segment
                      inverted
                      style={{
                        fontWeight: "500",
                        color: "white",
                        fontFamily: "Roboto",
                        paddingTop: "0",
                        paddingBottom: "0",
                      }}
                    >
                      <h2 style={{ fontFamily: "Roboto" }}>{name}</h2>
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        COORDINATES: {lat}°, {lon}°
                      </p>
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
                          style={{
                            float: "left",
                            fontWeight: "bold",
                            fontSize: "10px",
                          }}
                        >
                          Hours of Operation <span>&nbsp;&nbsp;</span>
                          <Icon name="plus square outline" inverted />
                        </div>
                        <br></br>
                      </Accordion.Title>
                      {/* Accordion Content For Hours */}
                      <Accordion.Content
                        style={{ margin: "0px" }}
                        active={activeIndex === 0}
                      >
                        <Segment
                          inverted
                          style={{
                            fontWeight: "400",
                            color: "white",
                            fontFamily: "Roboto",
                            paddingTop: "0",
                            paddingBottom: "1rem",
                            fontSize: "10px",
                            textAlign: "left",
                          }}
                        >
                          {/* Hours From API Displayed */}
                          <div>
                            <p>Mon: {mon}</p>
                            <p>Tues: {tues}</p>
                            <p>Wed: {wed}</p>
                            <p>Thu: {thu}</p>
                            <p>Fri: {fri}</p>
                            <p>Sat: {sat}</p>
                            <p>Sun: {sun}</p>
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
                          style={{
                            float: "left",
                            fontWeight: "bold",
                            fontSize: "10px",
                          }}
                        >
                          {" "}
                          Park Description <span>&nbsp;&nbsp;</span>
                          <Icon name="plus square outline" inverted />
                        </div>
                        <br></br>
                      </Accordion.Title>
                      {/* Accordion Content For Description */}
                      <Accordion.Content
                        active={activeIndex1 === 0}
                        style={{ margin: "0px" }}
                      >
                        <Segment
                          inverted
                          style={{
                            fontWeight: "600",
                            color: "white",
                            fontFamily: "Roboto",
                            paddingTop: "0",
                            paddingBottom: "1rem",
                            fontSize: "10px",
                            textAlign: "left",
                          }}
                        >
                          {/* Description From API Displayed */}
                          <p>{description}</p>
                        </Segment>
                      </Accordion.Content>
                    </Accordion>

                    {/* Contact Park Accordian */}
                    <Accordion>
                      {/* Accordion Title For Contact */}
                      <Accordion.Title
                        onClick={handleClick3}
                        index={1}
                        active={activeIndex3 === 0}
                      >
                        <div
                          className="tempInfo"
                          style={{
                            float: "left",
                            fontWeight: "bold",
                            fontSize: "10px",
                          }}
                        >
                          Contact Park <span>&nbsp;&nbsp;</span>
                          <Icon name="plus square outline" inverted />
                        </div>
                        <br></br>
                      </Accordion.Title>
                      {/* Accordion Content For Contact */}
                      <Accordion.Content
                        active={activeIndex3 === 0}
                        style={{ margin: "0px" }}
                      >
                        <Segment
                          inverted
                          style={{
                            textAlign: "left",
                            fontSize: "10px",
                            margin: "0px",
                            fontWeight: "100",
                            padding: "0px",
                          }}
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
                    <Accordion>
                      {/* Accordion Title for Park URL */}
                      <Accordion.Title
                        onClick={handleClick4}
                        index={1}
                        active={activeIndex4 === 0}
                      >
                        <div
                          className="tempInfo"
                          style={{
                            float: "left",
                            fontWeight: "bold",
                            fontSize: "10px",
                          }}
                        >
                          Park Website <span>&nbsp;&nbsp;</span>
                          <Icon name="plus square outline" inverted />
                        </div>
                        <br></br>
                      </Accordion.Title>
                      {/* Accordion Content for Park URL */}
                      <Accordion.Content
                        active={activeIndex4 === 0}
                        style={{ margin: "0px" }}
                      >
                        <Segment
                          inverted
                          style={{
                            textAlign: "left",
                            margin: "0px",
                            fontWeight: "100",
                            padding: "0px",
                          }}
                        >
                          {/* Display URL from API */}
                          <a
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ fontSize: "10px" }}
                          >
                            <span>&nbsp;&nbsp;</span>
                            {name} SITE
                          </a>
                        </Segment>
                      </Accordion.Content>
                    </Accordion>
                  </Accordion>
                </Segment>

                {/* Add Widget Button */}
                <Button
                  secondary
                  inverted
                  fluid
                  onClick={addParkWidget}
                  style={{ fontFamily: "Roboto", color: "white" }}
                >
                  {button}
                </Button>
              </>
            )}
            ,{spinner}
          </Segment>
        </Segment>
      </Grid>
    </div>
  );
}
export default ParkWidgetGen;
