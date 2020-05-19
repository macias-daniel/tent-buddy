import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import WidgetBumper from "./WidgetBumper";
import ForecastContainer from "./ForecastContainer";
import "./style.css";
//Optional include of the default css styles
import "react-open-weather/lib/css/ReactWeather.css";

import { Image, Accordion, Segment } from "semantic-ui-react";
import API from "../../utils/API";

function WeatherWidget() {
  const [weather, setWeather] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [city, setCity] = useState([]);
  // const [day, setDay] = useState([]);
  const [currentTemp, setCurrentTemp] = useState([]);
  const [currentIcon, setCurrentIcon] = useState([]);
  const [currentHumidity, setCurrentHumidity] = useState([]);
  const [currentDescription, setCurrentDescription] = useState([]);
  const [currentWind, setCurrentWind] = useState([]);
  const [clicked, setClicked] = useState(false);
  // const [search, setSearch] = useState("")

  useEffect(() => {
    API.getCurrent().then(results => {
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

    API.getWeatherForecast().then(results => {
      const dailyData = results.data.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00");
      });

      setCity(results.data.city.name);
      setWeather(dailyData);
    });
  }, []);

  const dateToFormat = new Date();

  useEffect(() => {
    setWeatherForecast(
      weather.map(weatherData => {
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
  }, [weather]);

  function doClick() {
    setClicked(true);
  }

  function dontClick() {
    setClicked(false);
  }
  //Component to render
  return (
    <>
      <WidgetBumper />
      <Segment attached inverted style={{ width: "225px" }}>
        <Accordion>
          <Accordion.Title index={0} onClick={clicked ? undefined : doClick}>
            <p style={{ float: "right", fontWeight: "100" }}>
              <Image src={currentIcon} />
            </p>
            <p className="tempCity">{city}</p>
            <p className="tempDate">
              <Moment format="dddd MM.DD" style={{ color: "white" }}>
                {dateToFormat}
              </Moment>
            </p>

            <p className="temp" style={{ color: "white" }}>
              {currentTemp}°F
            </p>

            <p
              className="tempInfo"
              style={{ float: "left", fontWeight: "bold" }}
            >
              {" "}
              HUMIDITY:<span>&nbsp;&nbsp;</span>{" "}
              <p style={{ float: "right", fontWeight: "100" }}>
                {" "}
                {currentHumidity}%
              </p>
            </p>
            <br></br>

            <p
              className="tempInfo"
              style={{ float: "left", fontWeight: "bold" }}
            >
              {" "}
              DESCRIPTION: <span>&nbsp;&nbsp;</span>
              <p style={{ float: "right", fontWeight: "100" }}>
                {" "}
                {currentDescription}
              </p>
            </p>
            <br></br>

            <p
              className="tempInfo"
              style={{ float: "left", fontWeight: "bold" }}
            >
              {" "}
              WIND SPEED: <span>&nbsp;&nbsp;</span>
              <p style={{ float: "right", fontWeight: "100" }}>
                {" "}
                {currentWind} MPH
              </p>
            </p>
            <br></br>
          </Accordion.Title>
          <Accordion.Content
            active={clicked}
            onClick={clicked ? true : dontClick}
          >
            {weatherForecast}
          </Accordion.Content>
        </Accordion>
      </Segment>
    </>
  );
}
export default WeatherWidget;
