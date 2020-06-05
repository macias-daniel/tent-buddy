import React from "react";
import { Segment, Container } from "semantic-ui-react";
// import API from "../../utils/API";
// import { useAuth } from "../../utils/auth";

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
            </Container>
          </Segment>
        </>
      </Segment>
    </>
  );
}
export default NoteWidgetGen;
