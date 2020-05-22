import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
// import ForecastContainer from "../ProfileWidgets/ForecastContainer";
import {
  Image,
  Icon,
  Step,
  Input,
  Dimmer,
  Loader,
  Segment,
  Button,
} from "semantic-ui-react";
import API from "../../utils/API";
import OpenWeatherMap from "../../utils/OpenWeatherMap";
import REI from "../../utils/REI";

function WeatherWidgetGen() {
  //Set Hook for weather API
  const { user } = useAuth();
  const [citySearch, setCity] = useState("");
  const [trailsWidget, setTrailsWidget] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState([]);
  const [button, setButton] = useState("");

  useEffect(() => {
    //Display add card when Page renders
    setSpinner(
      <Step.Group>
        <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
          <Icon name="compass outline" style={{ color: "white" }} />
          <Step.Content>
            <Step.Title style={{ color: "white", fontFamily: "Roboto" }}>
              TRAILS
            </Step.Title>
            <Step.Description
              style={{
                fontWeight: "100",
                color: "white",
                fontFamily: "Roboto",
              }}
            >
              FIND A TRAIL
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

    OpenWeatherMap.getCurrent(citySearch).then(results => {
      const lat = results.data.coord.lat;
      const lon = results.data.coord.lon;
      REITrails(lat, lon);
    });

    function REITrails(lat, lon) {
      //API call for forecast
      REI.getTrails(lat, lon).then(results => {
        //when results are rendered spinner turns off and results are displayed
        setSpinner("");
        setShowText(!showText);
        setTrailsWidget(
          results.data.routes.map(trails => {
            return (
              <>
                <Segment attached inverted>
                  <p
                    style={{
                      float: "right",
                      margin: "0px",
                      fontWeight: "100",
                      padding: "0px",
                    }}
                  >
                    <Image style={{ width: "167px" }} src={trails.imgSmall} />
                  </p>
                  <p className="temp" style={{ color: "white" }}>
                    {trails.name}
                  </p>
                  <></>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    <p className="wind">
                      COORDINATES:<span>&nbsp;&nbsp;</span>
                      {trails.latitude}°,{trails.longitude}°
                    </p>
                    <p className="wind">
                      RATING: {trails.stars}
                      <span>&nbsp;&nbsp;</span>
                    </p>
                    <a className="tempInfo" href={trails.url} rel="noopener noreferrer" target="_blank">
                      MORE INFORMATION<span>&nbsp;&nbsp;</span>
                    </a>
                  </div>
                  <br></br>
                </Segment>
                <Button
                  secondary
                  inverted
                  fluid
                  style={{ fontFamily: "Roboto", color: "white" }}
                  // onClick={addWeatherWidget}
                >
                  {button}
                </Button>
              </>
            );
          }),
        );
      });
    }
    //Render the container after the API call
    // function renderForecast(weather1) {
    //   setWeatherForecast(
    //     weather1.map(weatherData => {
    //       return (
    //         <ForecastContainer
    //           // key={weatherData.city.id}
    //           icon={weatherData.weather[0].icon}
    //           temp={weatherData.main.temp.toFixed()}
    //           day={new Date(weatherData.dt) * 1000}
    //           // humidity={weatherData.main.humidity}
    //         />
    //       );
    //     }),
    //   );
    // }
  }

  // //POST request to DB
  // const addWeatherWidget = event => {
  //   event.preventDefault();
  //   setButton("Widget Added");
  //   API.addUserWidget(user.id, "weather", { city: citySearch }).catch(err =>
  //     alert(err),
  //   );
  // };

  //Accordion
  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }

  //Get current Date
  const dateToFormat = new Date();

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
            setSpinner(
              <Step.Group>
                <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
                  <Icon name="compass outline" style={{ color: "white" }} />
                  <Step.Content>
                    <Step.Title
                      style={{ color: "white", fontFamily: "Roboto" }}
                    >
                      TRAILS
                    </Step.Title>
                    <Step.Description
                      style={{
                        fontWeight: "100",
                        color: "white",
                        fontFamily: "Roboto",
                      }}
                    >
                      FIND A TRAIL
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

        <Segment
          compact
          attached
          style={{
            width: "225px",
            backgroundColor: "rgba(27, 27, 27, 0.76)",
          }}
        >
          {showText && trailsWidget}, {spinner}
        </Segment>
      </Segment>
    </div>
  );
}
export default WeatherWidgetGen;
