import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import ForecastContainer from "./ForecastContainer";
import "./style.css";
import { Image, Accordion, Icon, Segment } from "semantic-ui-react";
import OpenWeatherMap from "../../utils/OpenWeatherMap";

function WeatherWidget({ key, city }) {
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [currentTemp, setCurrentTemp] = useState([]);
  const [currentIcon, setCurrentIcon] = useState([]);
  const [currentHumidity, setCurrentHumidity] = useState([]);
  const [currentDescription, setCurrentDescription] = useState([]);
  const [currentWind, setCurrentWind] = useState([]);

  useEffect(() => {
    //API call for single day weather
    OpenWeatherMap.getCurrent(city).then(results => {
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

    //API call for forecast
    OpenWeatherMap.getWeatherForecast(city).then(results => {
      //when results are rendered spinner turns off and results are displayed
      const dailyData = results.data.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00");
      });
      renderForecast(dailyData);
    });

    //Render the container after the API call
    function renderForecast(weather1) {
      setWeatherForecast(
        weather1.map(weatherData => {
          return (
            <ForecastContainer
              key={key}
              icon={weatherData.weather[0].icon}
              temp={weatherData.main.temp.toFixed()}
              day={new Date(weatherData.dt) * 1000}
              // humidity={weatherData.main.humidity}
            />
          );
        }),
      );
    }
  }, [city, key]);

  const dateToFormat = new Date();

  //Accordion
  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }

  //Component to render
  return (
    <>
      <Segment
        attached
        inverted
        style={{ width: "225px", marginTop:"25px",backgroundColor: "rgba(27, 27, 27, 0.76)" }}
      >
        <>
          <Segment attached inverted>
            <Accordion>
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
                <p className="tempCity">{city}</p>
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
                  FORECAST <span>&nbsp;&nbsp;</span>
                  <p style={{ float: "right", fontWeight: "100" }}>
                    {" "}
                    <Icon name="plus square outline" inverted />
                  </p>
                </div>
                <br></br>
              </Accordion.Title>
              <Accordion.Content
                style={{ margin: "0px" }}
                active={activeIndex === 0}
              >
                {weatherForecast}
              </Accordion.Content>
            </Accordion>
          </Segment>
        </>
      </Segment>
    </>
  );
}
export default WeatherWidget;
