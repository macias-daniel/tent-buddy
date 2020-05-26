import React, { useState } from "react";
import { Icon, Accordion, Segment } from "semantic-ui-react";

function ParkWidget({ mon, tues, wed, thu, fri, sat, sun, phone, description, url, lat, lon, name }) {

  // page appearance Hooks
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndex1, setActiveIndex1] = useState(-1);
  const [activeIndex3, setActiveIndex3] = useState(-1);
  const [activeIndex4, setActiveIndex4] = useState(-1);

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

  return (
    <Segment
      attached
      inverted
      compact
      style={{ width: "225px", backgroundColor: "rgba(27, 27, 27, 0.76)" }}
    >
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
                style={{ float: "left", fontWeight: "bold", fontSize: "12px" }}
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
                  fontSize: "12px",
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
                style={{ float: "left", fontWeight: "bold", fontSize: "12px" }}
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
                  fontSize: "12px",
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
                style={{ float: "left", fontWeight: "bold", fontSize: "12px" }}
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
                  fontSize: "12px",
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
                style={{ float: "left", fontWeight: "bold", fontSize: "12px" }}
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
                  style={{ fontSize: "12px" }}
                >
                  <span>&nbsp;&nbsp;</span>
                  {name} SITE
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
