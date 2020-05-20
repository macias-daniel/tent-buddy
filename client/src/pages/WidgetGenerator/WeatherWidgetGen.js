import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import ForecastContainer from "../ProfileWidgets/ForecastContainer";
import {
  Image,
  Icon,
  Step,
  Input,
  Accordion,
  Dimmer,
  Loader,
  Segment,
  Button,
} from "semantic-ui-react";
import OpenWeatherMap from "../../utils/OpenWeatherMap";

function WeatherWidgetGen() {
  const [citySearch, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [currentTemp, setCurrentTemp] = useState([]);
  const [currentIcon, setCurrentIcon] = useState([]);
  const [currentHumidity, setCurrentHumidity] = useState([]);
  const [currentDescription, setCurrentDescription] = useState([]);
  const [currentWind, setCurrentWind] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState([]);
  const [button, setButton] = useState("");

  useEffect(() => {
    setSpinner(
      <Step.Group>
        <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
          <Icon name="cloud" style={{ color: "white" }} />
          <Step.Content>
            <Step.Title style={{ color: "white", fontFamily: "Roboto" }}>
              WEATHER
            </Step.Title>
            <Step.Description
              style={{
                fontWeight: "100",
                color: "white",
                fontFamily: "Roboto",
              }}
            >
              ENTER A CITY
            </Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>,
    );
    setButton("Add Widget");
  }, []);

  function handleCitySearch() {
    setSpinner(
      <Dimmer active>
        <Loader />
      </Dimmer>,
    );

    OpenWeatherMap.getCurrent(citySearch).then(results => {
      setCurrentTemp(results.data.main.temp.toFixed());
      setCurrentIcon(
        "https://openweathermap.org/img/wn/" +
          results.data.weather[0].icon +
          "@2x.png",
      );
      setCurrentHumidity(results.data.main.humidity);
      setCurrentDescription(results.data.weather[0].description.toUpperCase());
      setCurrentWind(results.data.wind.speed.toFixed());
    });

    OpenWeatherMap.getWeatherForecast(citySearch)
      .then(results => {
        setSpinner("");
        setShowText(!showText);
        const dailyData = results.data.list.filter(reading => {
          return reading.dt_txt.includes("18:00:00");
        });
        renderForecast(dailyData);
      });

    function renderForecast(weather1) {
      setWeatherForecast(
        weather1.map(weatherData => {
          return (
            <ForecastContainer
              // key={weatherData.city.id}
              icon={weatherData.weather[0].icon}
              temp={weatherData.main.temp.toFixed()}
              day={new Date(weatherData.dt) * 1000}
              // humidity={weatherData.main.humidity}
            />
          );
        }),
      );
    }
  }

  function doClick() {
    setClicked(true);
  }


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
                  <Icon name="cloud" style={{ color: "white" }} />
                  <Step.Content>
                    <Step.Title
                      style={{ color: "white", fontFamily: "Roboto" }}
                    >
                      WEATHER
                    </Step.Title>
                    <Step.Description
                      style={{
                        fontWeight: "100",
                        color: "white",
                        fontFamily: "Roboto",
                      }}
                    >
                      ENTER A CITY
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
          {showText && (
            <>
              <Segment attached inverted>
                <Accordion defaultActiveKey="0">
                  <p
                    style={{
                      float: "right",
                      margin: "0px",
                      fontWeight: "100",
                      padding: "0px",
                    }}
                  >
                    <Image src={currentIcon} />
                  </p>
                  <>
                    <p className="tempCity">{citySearch}</p>
                    <p className="tempDate">
                      <Moment format="dddd">{dateToFormat}</Moment>
                    </p>
                  </>

                  <p className="tempDate">
                    <Moment
                      format="MM.DD"
                      style={{ textAlign: "left", color: "white" }}
                    >
                      {dateToFormat}
                    </Moment>
                  </p>
                  <p className="temp" style={{ color: "white" }}>
                    {currentTemp}°F
                  </p>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    <p className="tempInfo">
                      HUMIDITY:<span>&nbsp;&nbsp;</span>
                      {currentHumidity}%
                    </p>
                    <p className="wind">
                      WIND SPEED:<span>&nbsp;&nbsp;</span>
                      {currentWind} MPH{" "}
                    </p>

                    <p className="tempInfo">
                      CONDITIONS:<span>&nbsp;&nbsp;</span>
                      {currentDescription}
                    </p>
                  </div>
                  <Accordion.Title>
                    <div
                      className="tempInfo"
                      style={{
                        float: "left",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      FORECAST <span>&nbsp;&nbsp;</span>
                      <p style={{ float: "right", fontWeight: "100" }}>
                        {" "}
                        <Icon
                          name="plus square outline"
                          onClick={clicked ? undefined : doClick}
                          inverted
                        />
                      </p>
                    </div>
                    <br></br>
                  </Accordion.Title>
                  <Accordion.Content style={{ margin: "0px" }} active={clicked}>
                    {weatherForecast}
                  </Accordion.Content>
                </Accordion>
              </Segment>
              <Button
                secondary
                inverted
                fluid
                style={{ fontFamily: "Roboto", color: "white" }}
                onClick={event => {
                  setButton("Widget Added");
                }}
              >
                {button}
              </Button>
            </>
          )}
          , {spinner}
        </Segment>
      </Segment>
    </div>
  );
}
export default WeatherWidgetGen;
