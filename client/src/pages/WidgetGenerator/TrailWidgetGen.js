import React, { useState, useEffect } from "react";
import TrailContainer from "../ProfileWidgets/TrailContainer";
import {
  Icon,
  Step,
  Input,
  Dimmer,
  Loader,
  Segment,
} from "semantic-ui-react";
import OpenWeatherMap from "../../utils/OpenWeatherMap";

import REI from "../../utils/REI";

function WeatherWidgetGen() {
  //Set Hook for weather API
  const [citySearch, setCity] = useState("");
  const [trailsWidget, setTrailsWidget] = useState([]);
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState([]);

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
              <TrailContainer
                name={trails.name}
                src={trails.imgSmall}
                lat={trails.latitude}
                lon={trails.longitude}
                stars={trails.stars}
                url={trails.url}
              />
            );
          }),
        );
      });
    }
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
