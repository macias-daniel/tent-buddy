import React, { useState, useEffect } from "react";
// can import style sheet
import { Icon, Label, Menu, Table, Accordion, Segment } from "semantic-ui-react";
import NationalParksAPI from "../../utils/OpenWeatherMap";

function ParkWidget() {
  const [parkInfoData, setParkInfoData] = useState([]);
  const [parkInfo, setParkInfo] = useState([]);
  const [park, setPark] = useState([]);
  const [hours, setHours] = useState([]);
  const [phone, setPhone] = useState([]);
  const [description, setDescription] = useState([]);
  const [url, setUrl] = useState([]);
  const [address, setAddress] = useState([]);
  const [latlon, setLatlon] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    NationalParksAPI.getInfo().then(results => {
      setHours(results);
      setPhone(results);
      setDescription(results);
      setUrl(results);
      setAddress(results);
      setLatlon(results);
      // result.data.main.park info
      // set above constants
    });

    // this api call needs work
    // not sure about how the 180000 works or the reading.dt_txt
    // need helps implementing 
    NationalParksAPI.getAlerts().then(results => {
      // results.data.list.filter

      // setAlertTitle(results);
      // setAlertCategory(results);
      // setAlertDescription(results);
      setPark(results.data.city.name);
    });
  }, []);

  function handleClick() {
    const newIndex = activeIndex === -1 ? 0 : -1;
    setActiveIndex(newIndex);
  }
  

  return(
    <>
      <Segment attached inverted style={{ width: "225px", backgroundColor: "rgba(27, 27, 27, 0.76)"}}>
        <Segment attached inverted>

          <Table celled>
            <Table.Header>

              <Table.Row>
                <Table.HeaderCell>Operation Hours</Table.HeaderCell>
                <Table.HeaderCell> </Table.HeaderCell>
              </Table.Row>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon> Mon </Label>
                  </Table.Cell>
                  <Table.Cell>Tue</Table.Cell>
                  <Table.Cell>Wed</Table.Cell>
                  <Table.Cell>Thu</Table.Cell>
                  <Table.Cell>Fri</Table.Cell>
                  <Table.Cell>Sat</Table.Cell>
                  <Table.Cell>Sun</Table.Cell>
                </Table.Row>


                
              </Table.Body>

            </Table.Header>

          </Table>



          <Accordion>
            <Accordion.Title                 
              onClick={handleClick}
              index={0}
              active={activeIndex === 0}>


              <p style={{ float: "right", fontWeight: "100" }}>
                <div>
                  <h4>Hours: {hours}</h4>
                </div>
              </p>
              <p className="tempCity">{park}</p>
              <p className="tempDate"></p>
              {/* phone number */}
              <p className="temp" style={{ color: "white" }}>
                {phone}
              </p>
              {/* url */}
              <div style={{ textAlign: "left", fontWeight: "bold" }}>
              URL: {url}
          
              </div>
              <p className="wind">
              Address:<span>&nbsp;&nbsp;</span>
                {address} MPH{" "}
              </p>
              <br></br>

              <div
                className="tempInfo"
                style={{ float: "left", fontWeight: "bold" }}
              >
                {" "}
                {/* description */}
              DESCRIPTION: <span>&nbsp;&nbsp;</span>
                <p style={{ float: "right", fontWeight: "100" }}>
                  {" "}
                  {description}
                </p>
              </div>
              <br></br>

              <div
                className="tempInfo"
                style={{ float: "left", fontWeight: "bold" }}
              >
                {" "}
                {/* lat lon */}
              Lat Lon: <span>&nbsp;&nbsp;</span>
                <p style={{ float: "right", fontWeight: "100" }}>
                  {" "}
                  {latlon} 
                </p>
              </div>
              <br></br>
            </Accordion.Title>
            <Accordion.Content 
              active={activeIndex === 0} 
            >
              {parkInfo}            
            </Accordion.Content>
          </Accordion>


        </Segment>
      </Segment>
    </>
  );
}
export default ParkWidget;
