import React, { useState, useEffect } from "react";
import { Segment, Button, Image, Icon } from "semantic-ui-react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";

function TrailContainer({ name, src, lat, lon, stars, url }) {
  const [button, setButton] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    //Widget is set to Add when page renders
    setButton("Add Widget");
  }, []);

  const addTrailWidget = event => {
    event.preventDefault();
    setButton("Widget Added");
    API.addUserWidget(user.id, "trails", {
      name: name,
      src: src,
      lat: lat,
      lon: lon,
      stars: stars,
      url: url,
    }).catch(err => alert(err));
  };
  return (
    <>
      <Segment attached inverted>
        <p
          style={{
            float: "right",
            margin: "0px",
            marginTop: "5px",
            fontWeight: "100",
            padding: "0px",
          }}
        >
          <Image style={{ width: "167px" }} src={src} />
        </p>
        <p className="temp" style={{ color: "white" }}>
          {name}
        </p>
        <></>
        <div style={{ textAlign: "left", fontWeight: "bold" }}>
          <p className="wind">
            COORDINATES:<span>&nbsp;&nbsp;</span>
            {lat}°,{lon}°
          </p>
          <p className="wind">
            RATING: {stars}
            <span>&nbsp;&nbsp;</span>
          </p>
          <a
            className="tempInfo"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            MORE INFORMATION <Icon name="plus square outline" inverted />
            <span>&nbsp;&nbsp;</span>
          </a>
        </div>
        <br></br>
      </Segment>
      <Button
        secondary
        inverted
        fluid
        style={{ fontFamily: "Roboto", color: "white" }}
        onClick={addTrailWidget}
      >
        {button}
      </Button>
    </>
  );
}

export default TrailContainer;
