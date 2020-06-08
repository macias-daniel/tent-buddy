import React, { useState } from "react";
import {
  Segment,
  Button,
  Icon,
  Form,
  Container,
  Input,
} from "semantic-ui-react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";

function NoteWidgetGen({ widgetID, title, text }) {
  const { user } = useAuth();
  const [showText, setShowText] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [titleNew, setTitleNew] = useState(title);
  const [textNew, setTextNew] = useState(text);

  const newNote = []

  function editNote() {
    setShowText(false);
    setShowEdit(true);
  }

  function saveNote() {
    newNote.push(
      {
        title: titleNew,
        text: textNew,
      },
    );
    renderSave();
  }

  function renderSave() {
    API.editUserWidget(user.id, widgetID, {
      notes: newNote,
    }).catch(err => alert(err));
    setShowEdit(false);
    setShowText(true);
    window.location.reload(false);
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
                  style={{
                    margin: "0px",
                    fontFamily: "Roboto",
                    width: "150px",
                  }}
                  value={titleNew}
                  onChange={event => {
                    setTitleNew(event.target.value);
                  }}
                />
                <Form.TextArea
                  style={{ margin: "0px", fontFamily: "Roboto" }}
                  value={textNew}
                  onChange={event => {
                    setTextNew(event.target.value);
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
                  onClick={saveNote}
                >
                  <Icon name="save outline" />{" "}
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
