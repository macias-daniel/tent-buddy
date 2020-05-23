import React from "react";
import "./style.css";
import { Image, Icon, Segment } from "semantic-ui-react";

function TrailWidget({ name, src, lat, lon, stars, url }) {
  //Component to render
  return (
    <>
      <Segment
        attached
        inverted
        style={{
          width: "225px",
          backgroundColor: "rgba(27, 27, 27, 0.76)",
        }}
      >
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
        </>
      </Segment>
    </>
  );
}
export default TrailWidget;
