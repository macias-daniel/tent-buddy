import React from "react";
import { Segment, Button, Icon, Container } from "semantic-ui-react";

function NoteWidgetGen({ title, text }) {
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
            <Container>
              <h2>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "25px",
                    margin: "0px",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                  }}
                >
                  {text}
                </p>
              </h2>
              <Button
                icon
                secondary
                inverted
                style={{
                  fontFamily: "Roboto",
                  color: "white",
                  marginTop: "10px",
                }}
                // onClick={addWeatherWidget}
              >
                <Icon name="pencil" />{" "}
              </Button>
            </Container>
          </Segment>
        </>
      </Segment>
    </>
  );
}
export default NoteWidgetGen;
