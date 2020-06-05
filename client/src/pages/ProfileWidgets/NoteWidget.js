import React, { useState } from "react";
import {
  Segment,
  Button,
  Icon,
  Form,
  Container,
  Input,
} from "semantic-ui-react";

function NoteWidgetGen({ title, text }) {
  const [showText, setShowText] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [titleNew, setTitleNew] = useState("");
  const [textNew, setTextNew] = useState("");

  function editNote() {
    setShowText(false);
    setShowEdit(true);
  }

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
        {showText && (
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
                  onClick={editNote}
                >
                  <Icon name="pencil" />{" "}
                </Button>
              </Container>
            </Segment>
          </>
        )}
        {showEdit && (
          <>
            <Segment attached inverted>
              <Container>
                  <Input
                    style={{ margin: "0px" }}
                    value={title}
                    onChange={event => {
                      setTitleNew(event.target.value);
                    }}
                  />
                  <Form.TextArea
                    value={text}
                    onChange={event => {
                      text.props = event.target.value;
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "15px",
                    }}
                  ></p>

                <Button
                  icon
                  secondary
                  inverted
                  style={{
                    fontFamily: "Roboto",
                    color: "white",
                    marginTop: "10px",
                  }}
                  onClick={editNote}
                >
                  <Icon name="pencil" />{" "}
                </Button>
              </Container>
            </Segment>
          </>
        )}
      </Segment>
    </>
  );
}
export default NoteWidgetGen;
