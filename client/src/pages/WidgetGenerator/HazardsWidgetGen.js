import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
import ToProfileButton from "../../components/ToProfileButton/ToProfileButton";
import {
  Grid,
  Icon,
  Step,
  Input,
  Dimmer,
  Loader,
  Segment,
  Accordion,
  Button,
} from "semantic-ui-react";
import API from "../../utils/API";
import ErrorSegment from "../../components/ErrorSegment/ErrorSegment";
import OpenWeatherMap from "../../utils/OpenWeatherMap";
import ClimateCell from "../../utils/ClimateCell";

function AirWidgetGen() {
  //Set Hook for weather API
  const { user } = useAuth();
  const [citySearch, setCity] = useState("");
  const [currentEpa, setCurrentEpa] = useState([]);
  const [currentFire, setCurrentFire] = useState([]);
  const [currentCO, setCurrentCO] = useState([]);
  const [currentPm10, setCurrentPm10] = useState([]);
  const [currentO3, setCurrentO3] = useState([]);
  const [showText, setShowText] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [button, setButton] = useState("");
  const [spinner, setSpinner] = useState([]);
  const [profileBtnVisibility, setProfileBtnVisibility] = useState(false);
  const [error, setError] = useState({ isVisible: false, errorMessage: "" });

  useEffect(() => {
    //Display add card when Page renders
    setSpinner(
      <Step.Group>
        <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
          <Icon name="bolt" style={{ color: "white" }} />
          <Step.Content>
            <Step.Title style={{ color: "white", fontFamily: "Bungee" }}>
              HAZARDS
            </Step.Title>
            <Step.Description
              style={{
                fontWeight: "100",
                color: "white",
              }}
            >
              <p style={{ fontSize: "10px" }}> SEARCH BY CITY</p>
              <p style={{ fontSize: "10px" }}> RECEIVE CURRENT HAZARDS</p>
            </Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>,
    );
    //Widget is set to Add when page renders
    setButton("Add Widget");
  }, []);

  function handleCitySearch() {
    //When search begins, sipnner appears
    setSpinner(
      <Dimmer active>
        <Loader />
      </Dimmer>,
    );

    if (citySearch === "") {
      return (
        setSpinner(
          <Step.Group>
            <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
              <Icon name="bolt" style={{ color: "white" }} />
              <Step.Content>
                <Step.Title style={{ color: "white", fontFamily: "Bungee" }}>
                  HAZARDS
                </Step.Title>
                <Step.Description
                  style={{
                    fontWeight: "100",
                    color: "white",
                  }}
                >
                  <p style={{ fontSize: "10px" }}> SEARCH BY CITY</p>
                  <p style={{ fontSize: "10px" }}> RECEIVE CURRENT HAZARDS</p>
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>,
        ),
        setError({ isVisible: true, errorMessage: "PLEASE ENTER A CITY" })
      );
    } else {
      setError("");
    }

    OpenWeatherMap.getCurrent(citySearch).then(results => {
      const lat = results.data.coord.lat;
      const lon = results.data.coord.lon;
      getClimateCell(lat, lon);
    });

    function getClimateCell(lat, lon) {
      //API call for forecast
      ClimateCell.getHazards(lat, lon).then(results => {
        //when results are rendered spinner turns off and results are displayed
        setSpinner("");
        setShowText(!showText);
        setCurrentEpa(results.data.epa_health_concern.value);
        setCurrentFire(results.data.fire_index.value.toFixed(2));
        setCurrentCO(results.data.co.value);
        setCurrentO3(results.data.o3.value);
        setCurrentPm10(results.data.pm10.value);
      });
    }
  }

  //POST request to DB
  const addHazardsWidget = event => {
    event.preventDefault();
    setProfileBtnVisibility(true);
    setButton("Widget Added");
    API.addUserWidget(user.id, "weather", { city: citySearch }).catch(err =>
      alert(err),
    );
  };

  //Accordion
  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }

  return (
    <div>
      <Grid centered style={{ margin: "0px" }}>
        <br />
        <Segment
          attached
          inverted
          style={{
            marginTop: "25px",
            backgroundColor: "rgba(27, 27, 27, 0.76)",
            width: "250px",
          }}
        >
          <Input
            style={{ margin: "10px" }}
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
                onClick={handleCitySearch}
              />
            }
            placeholder="ENTER CITY"
            onChange={event => {
              setError({ ...error, isVisible: false });
              setSpinner(
                <Step.Group>
                  <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
                    <Icon name="bolt" style={{ color: "white" }} />
                    <Step.Content>
                      <Step.Title
                        style={{ color: "white", fontFamily: "Bungee" }}
                      >
                        HAZARDS
                      </Step.Title>
                      <Step.Description
                        style={{
                          fontWeight: "100",
                          color: "white",
                        }}
                      >
                        <p style={{ fontSize: "10px" }}> SEARCH BY CITY</p>
                        <p style={{ fontSize: "10px" }}>
                          {" "}
                          RECEIVE CURRENT HAZARDS
                        </p>
                      </Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>,
              );
              setButton("Add Widget");
              setShowText("");
              setCity(event.target.value.toUpperCase());
            }}
          />
          {error.isVisible && <ErrorSegment>{error.errorMessage}</ErrorSegment>}
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
                  <h1 style={{fontFamily:"Roboto"}}>{citySearch}</h1>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    <h3 className="wind1">
                      FIRE INDEX:<span>&nbsp;&nbsp;</span>
                      {currentFire}
                    </h3>
                    <h3 className="wind1">
                      AIR QUALITY:<span>&nbsp;&nbsp;</span>
                      {currentEpa}
                    </h3>
                  <p className="wind">
                      CARBON MONOXIDE:<span>&nbsp;&nbsp;</span>
                      {currentCO} ppm
                    </p>
                  <p className="wind">
                      OZONE:<span>&nbsp;&nbsp;</span>
                      {currentO3} ppb
                    </p>
                  <p className="wind">
                      PARTICULATE MATTER:<span>&nbsp;&nbsp;</span>
                      {currentPm10} µg/m3
                    </p>
                  </div>
                </Segment>
                <Button
                  secondary
                  inverted
                  fluid
                  style={{
                    fontFamily: "Roboto",
                    color: "white",
                    marginTop: "10px",
                  }}
                  onClick={addHazardsWidget}
                >
                  {button}
                </Button>
              </>
            )}
            ,{" "}
            {/* If the add to widget function and profileBtn visibility is set to true show go home button */}
            {profileBtnVisibility && <ToProfileButton />},{spinner}
          </Segment>
        </Segment>
      </Grid>
    </div>
  );
}
export default AirWidgetGen;
