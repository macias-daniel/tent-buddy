import React, { useState, useEffect } from "react";
import "./style.css";
import { Segment } from "semantic-ui-react";
import ClimateCell from "../../utils/ClimateCell.js";

function WeatherWidget({city, lat, lon }) {
  //Set Hook for weather API
  const [currentEpa, setCurrentEpa] = useState([]);
  const [currentEpaWord, setCurrentEpaWord] = useState([]);
  const [currentFire, setCurrentFire] = useState([]);
  const [currentFireWord, setCurrentFireWord] = useState([]);
  const [currentCO, setCurrentCO] = useState([]);
  const [currentPm10, setCurrentPm10] = useState([]);
  const [currentO3, setCurrentO3] = useState([]);
  const [color, setColor] = useState("");
  const [colorEpa, setColorEpa] = useState("");

  useEffect(() => {
    //API call for single day weather
    ClimateCell.getHazards(lat, lon).then(results => {
      //when results are rendered spinner turns off and results are displayed
      setCurrentEpa(results.data.epa_aqi.value);
      setCurrentFire(results.data.fire_index.value.toFixed(2));
      setCurrentCO(results.data.co.value);
      setCurrentO3(results.data.o3.value);
      setCurrentPm10(results.data.pm10.value);
    });
    getColors();
    getEpa();
  }, [lat, lon]);

  function getColors() {
    if (currentFire <= 11) {
      setCurrentFireWord("Low");
      setColor("#61fc8f");
    }
    if (currentFire <= 24 && currentFire > 11) {
      setCurrentFireWord("Moderate");
      setColor("#61dffc");
    }
    if (currentFire <= 49 && currentFire > 24) {
      setCurrentFireWord("High");
      setColor("#f4fc61");
    }
    if (currentFire <= 74 && currentFire > 49) {
      setCurrentFireWord("Severe");
      setColor("#fcbe61");
    }
    if (currentFire >= 75) {
      setCurrentFireWord("Extreme");
      setColor("#ec2b2b");
    }
  }
  function getEpa () {
    if (currentEpa <= 50){
      setCurrentEpaWord("Good");
      setColorEpa("#61fc8f");
    }
    if (currentEpa <= 100 && currentEpa > 50){
      setCurrentEpaWord("Moderate");
      setColorEpa("#61dffc");
    }
    if (currentEpa <= 200 && currentEpa > 100){
      setCurrentEpaWord("Unhealthy");
      setColorEpa("#f4fc61");
    }
    if (currentEpa <= 300 && currentEpa > 200){
      setCurrentEpaWord("Very Unhealthy");
      setColorEpa("#fcbe61");
    }
    if (currentEpa >= 300){
      setCurrentEpaWord("Hazardous");
      setColorEpa("#ec2b2b");
    }
  }

  //Component to render
  return (
    <>
      <Segment
        compact
        attached
        inverted
        style={{ width: "225px", backgroundColor: "rgba(27, 27, 27, 0.76)" }}
      >
        <Segment attached inverted>
          <h1 style={{ fontFamily: "Roboto" }}>{city}</h1>
          <div style={{ textAlign: "left", fontWeight: "bold" }}>
            <h3 style={{ float: "left" }} className="wind1">
              FIRE INDEX:<span>&nbsp;&nbsp;</span>
            </h3>
            <p className="wind1" style={{ color: color }}>
              {" "}
              {currentFireWord}
            </p>
            <h3 className="wind1" style={{ float: "left" }}>
              AIR QUALITY:<span>&nbsp;&nbsp;</span>
            </h3>
            <p className="wind1" style={{ color: colorEpa }}>
              {" "}
              {currentEpaWord}
            </p>
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
      </Segment>
    </>
  );
}
export default WeatherWidget;
