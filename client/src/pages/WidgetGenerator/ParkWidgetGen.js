import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import ParkInfoContainer from "../ProfileWidgets/ParkInfoContainer";
import {
  Icon,
  Step,
  Input,
  Accordion,
  Dimmer,
  Loader,
  Segment,
  Button,
} from "semantic-ui-react";
import NationalParksAPI from "../../utils/NationalParksAPI";

function ParkWidgetGen() {
  const [parkSearch, setPark] = useState("");
  const [parkInfo, setParkInfo] = useState([]);
  const [hours, setHours] = useState([]);
  const [phone, setPhone] = useState([]);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState([])
  const [address, setAddress] = useState([]);
  const [latlon, setLatlon] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState([]);
  const [button, setButton] = useState("");

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
    // get park info
    // no return
    NationalParksAPI.getInfo(parkSearch).then(results => {
      // make results path for hours
      console.log(results);
      
      setHours(results.data[0].operatingHours);
      setPhone(results);
      setDescription(results);
      setUrl(results);
      setAddress(results);
      setLatlon(results);
      setSpinner("");
      setShowText(!showText);
    });

      // get park alerts
      // return reading.dt_txt??
    // NationalParksAPI.getAlerts(parkSearch).then(results => {

    // });
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
                  <p
                    style={{
                      float: "right",
                      margin: "0px",
                      fontWeight: "100",
                      padding: "0px",
                    }}
                  >
                    {/* hours */}
                    <div>
                      <h4 >Hours: {hours}</h4>
                    </div>
                  </p>
                  <>
                    <p className="tempCity">{parkSearch}</p>
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
                  {/* phone number */}
                  <p className="temp" style={{ color: "white" }}>
                    {phone}
                  </p>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    {/* url */}
                    <p className="tempInfo">
                      URL:<span>&nbsp;&nbsp;</span>
                      {url}
                    </p>
                    {/* address */}
                    <p className="wind">
                      Address:<span>&nbsp;&nbsp;</span>
                      {address} MPH{" "}
                    </p>
                    {/* lat lon */}
                    <p className="tempInfo">
                      Latlon:<span>&nbsp;&nbsp;</span>
                      {latlon}
                    </p>
                    {/* park description */}
                    <p className="tempImfo">
                      Description:<span>&nbsp;&nbsp;</span>
                      {description}
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
                      ALERTS <span>&nbsp;&nbsp;</span>
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
                    {/* park info */}
                    {parkInfo}
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
          )},
          {spinner}
        </Segment>
      </Segment>
    </div>
  );
}
export default ParkWidgetGen;
