import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import ParkInfoContainer from "../ProfileWidgets/ParkInfoContainer";
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
import NationalParksAPI from "../../utils/NationalParksAPI";

function ParkWidgetGen() {
  const [parkSearch, setPark] = useState("");
  const [parkInfo, setParkInfo] = useState([]);
  const [hours, setHours] = useState([]);
  const [phone, setPhone] = useState([]);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState([])
  const [address, setAddress] = useState([]);
  const [latlon, setLatlon] = usestate([]);
  const [alertTitle, setAlertTitle] = useState([]);
  const [alertCategory, setAlertCategory] = useState([]);
  const [alertDescription, setAlertDescription] = useState([]);
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
      setHours(results);
      setPhone();
      setDescription();
      setUrl();
      setAddress();
      setLatlon();
      
    });

      // get park alerts
      // return reading.dt_txt??
    NationalParksAPI.getAlerts(parkSearch).then(results => {
      setSpinner("");
      setShowText(!showText);
      setAlertTitle();
      setAlertCategory();
      setAlertDescription();
      const dailyData = results.data.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00");
      });
      renderInfo(dailyData);
    });

    // return Park Info Container 
    function renderInfo (info1) {
      setParkInfo(
        info1.map(parkData => {
          return (
            <ParkInfoContainer
            // key={parkData.}
            icon={}
            temp={}
            day={}
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
          icon={<Icon name="search" inverted circular link onClick={handleParkSearch} />
          }
          placeholder="ENTER PARK"
          onChange={event => {
            setSpinner(
              <Step.Group>
                <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)"}}>
                  <Icon name

                </Step>
              </Step.Group>
            )
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

        </Segment>
      </Segment>
    </div>
  );
}
export default ParkWidgetGen;
