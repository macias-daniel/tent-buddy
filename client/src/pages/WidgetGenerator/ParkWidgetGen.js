import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
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
import API from "../../utils/API";

function ParkWidgetGen() {
  const { user } = useAuth();
  const [parkSearch, setPark] = useState("");
  // const [alertInfo, setAlertInfo] = useState([]);
  const [hours, setHours] = useState([]);
  const [phone, setPhone] = useState([]);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState([]);
  const [address, setAddress] = useState([]);
  const [latlon, setLatlon] = useState([]);
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState([]);
  const [button, setButton] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

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


    NationalParksAPI.getInfo(parkSearch).then(results => {
      // make results path for hours
      
      // console.log(results);

      results.data.data.map(result => {
        return (
          setPhone(result)
        );
      });

      
      // setHours(results.data[0].);
      // setPhone(results);
      // setDescription(results);
      // setUrl(results);
      // setAddress(results);
      // setLatlon(results);
      // setSpinner("");
      // setShowText(!showText);
    });
  }
  
  const addParkWidget = event => {
    event.preventDefault();
    setButton("Widget Added");
    API.addUserWidget(user.id,"park", {park: setPark})
      .catch(err => alert(err));
  };

  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
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

                  <p className="tempCity">{parkSearch}</p>


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
                      {address}
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
                      ALERTS <span>&nbsp;&nbsp;</span>
                      <p style={{ float: "right", fontWeight: "100" }}>
                        {" "}
                        <Icon
                          name="plus square outline"
                          inverted
                        />
                      </p>
                    </div>
                    <br></br>
                  </Accordion.Title>
                  <Accordion.Content style={{ margin: "0px" }} active={activeIndex === 0}>
                    {/* park info */}
                    {/* {alertInfo} */}
                  </Accordion.Content>
                </Accordion>
              </Segment>
              <Button
                secondary
                inverted
                fluid
                style={{ fontFamily: "Roboto", color: "white" }}
                onClick={addParkWidget}
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
