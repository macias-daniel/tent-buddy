import React, { useState, useEffect } from "react";
import {
  Segment,
  Container,
} from "semantic-ui-react";
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
              {/* <Input inverted placeholder={title}></Input> */}
              <h4>{title}</h4>
              <br></br>
              <p>{text}</p>
            </Container>
          </Segment>
        </>
      </Segment>
    </>
  );
}
export default NoteWidgetGen;
