import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import {
  Grid,
  Container,
  Image,
  Segment,
  Button,
} from "semantic-ui-react";
import WeatherWidget from "./ProfileWidgets/WeatherWidget";
// import WidgetSorter from "./ProfileWidgets/WidgetSorter";
import WidgetBumper from "./ProfileWidgets/WidgetBumper";
import ParkWidget from "./ProfileWidgets/ParkWidget";
import TrailWidget from "./ProfileWidgets/TrailWidget";
import NoteWidget from "./ProfileWidgets/NoteWidget";
import sadlogo from "../assets/sadlogo.png";

function Profile() {
  const [widgets, setWidgets] = useState([]);
  const { user } = useAuth();

  const deleteWidget = widget => {
    API.deleteUserWidget(user.id, widget._id).then(() => {
      const newWidgetArray = widgets.filter(w => w._id !== widget._id);
      setWidgets(newWidgetArray);
    });
  };

  useEffect(() => {
    API.getUser(user.id).then(response => {
      setWidgets(response.data.widgets);
    });
  }, [user.id]);

  
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Grid style={{ margin: "0px", padding: "0px" }} centered>
        {/* <Container className="profileContainer">
          <Segment
            compact
            attached
            inverted
            style={{
              width: "280px",
              backgroundColor: "rgba(27, 27, 27, 0.76)",
            }}
          >
            <Segment attached inverted>
              <Button icon inverted onClick={handleFilterNotes}>
                <Icon name="pencil" />
              </Button>
              <Button icon inverted onClick={handleFilterWeather}>
                <Icon name="cloud" />
              </Button>
              <Button icon inverted onClick={handleFilterParks}>
                <Icon name="tree" />
              </Button>
              <Button icon inverted onClick={handleFilterTrails}>
                <Icon name="compass outline" />
              </Button>
            </Segment>
          </Segment>
        </Container> */}
        {widgets.length === 0 ? (
          <>
            <Container className="profileContainer">
              <Segment
                compact
                attached
                inverted
                style={{
                  width: "280px",
                  backgroundColor: "rgba(27, 27, 27, 0.76)",
                }}
              >
                <>
                  <Segment attached inverted>
                    <Link to={isLoggedIn ? "/widgetGenerator" : "/"}>
                      <Button inverted>
                        <Image
                          className="headerLogo"
                          alt="Tent logo"
                          src={sadlogo}
                        ></Image>
                        <p style={{ marginTop: "5px", fontWeight: "00" }}>
                          Oh no! Tent Buddy is empty... Let's pack up!
                        </p>
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>
                          CLICK HERE
                        </p>
                      </Button>
                    </Link>
                  </Segment>
                </>
              </Segment>
            </Container>
          </>
        ) : (
          widgets.map(widget => {
            let component;
            //Depending on the widgets type return that widgets corresponding components
            if (widget.type === "notes") {
              component = (
                <>
                  <Container
                    className="profileContainer"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    <WidgetBumper
                      icon="pencil"
                      handleDeleteWidget={() => deleteWidget(widget)}
                    />
                    <NoteWidget
                      key={widget._id}
                      title={widget.data.notes[0].title}
                      text={widget.data.notes[0].text}
                    />
                  </Container>
                </>
              );
            } else if (widget.type === "weather") {
              component = (
                <>
                  <Container
                    className="profileContainer"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    <WidgetBumper
                      icon="cloud"
                      handleDeleteWidget={() => deleteWidget(widget)}
                    />
                    <WeatherWidget key={widget._id} city={widget.data.city} />
                  </Container>
                </>
              );
            } else if (widget.type === "park") {
              component = (
                <>
                  <Container
                    className="profileContainer"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    <WidgetBumper
                      icon="tree"
                      handleDeleteWidget={() => deleteWidget(widget)}
                    />
                    <ParkWidget
                      key={widget._id}
                      mon={widget.data.mon}
                      tues={widget.data.tues}
                      wed= {widget.data.wed}
                      thu= {widget.data.thu}
                      fri={widget.data.fri}
                      sat= {widget.data.sat}
                      sun= {widget.data.sun}
                      phone= {widget.data.phone}
                      description= {widget.data.description}
                      url= {widget.data.url}
                      lat= {widget.data.lat}
                      lon={widget.data.lon}
                      name= {widget.data.name}
                    />
                  </Container>
                </>
              );
            } else if (widget.type === "trails") {
              component = (
                <div style={{ margin: "0px", padding: "0px" }}>
                  <Container
                    className="profileContainer"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    <WidgetBumper
                      icon="compass outline"
                      handleDeleteWidget={() => deleteWidget(widget)}
                    />
                    <TrailWidget
                      key={widget._id}
                      name={widget.data.name}
                      src={widget.data.src}
                      lat={widget.data.lat}
                      lon={widget.data.lon}
                      stars={widget.data.stars}
                      url={widget.data.url}
                    />
                  </Container>
                </div>
              );
            }
            return component;
          })
        )}
      </Grid>
    </div>
  );
}

export default Profile;
