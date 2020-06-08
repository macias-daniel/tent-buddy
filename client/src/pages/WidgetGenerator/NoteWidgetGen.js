import React, { useState } from "react";
import {
  Icon,
  Input,
  Step,
  Segment,
  Button,
  Form,
  Grid,
} from "semantic-ui-react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import ErrorSegment from "../../components/ErrorSegment/ErrorSegment";
import ToProfileButton from "../../components/ToProfileButton/ToProfileButton";

function NoteWidgetGen() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [button, setButton] = useState("Add Widget");
  const [showText, setShowText] = useState(false);
  const [error, setError] = useState({ isVisible: false, errorMessage: "" });
  const [profileBtnVisibility, setProfileBtnVisibility] = useState(false);

  const upsertNote = () => {
    if (title === "" || text === "") {
      return setError({
        isVisible: true,
        errorMessage: "PLEASE ENTER REQUIRED FIELDS",
      });
    } else {
      setError("");
    }
    setNotes([
      {
        title,
        text,
      },
    ]);

    setShowText(!showText);
    setTitle("");
    setText("");
  };

  const setCurrentNote = note => {
    setText(note.text);
    setTitle(note.title);
  };

  //POST request to DB
  const addNotesWidget = event => {
    console.log(notes);
    event.preventDefault();
    setButton("Widget Added");

    //When user adds widget display button that takes them to the profile page
    setProfileBtnVisibility(true);
    API.addUserWidget(user.id, "notes", {
      notes: notes,
    }).catch(err => alert(err));
  };

  return (
    <div>
      <Grid centered style={{ margin: "0px" }}>
        <br />
        <Segment
          attached
          inverted
          style={{
            marginTop: "25px",
            backgroundColor: "rgba(27, 27, 27, 0.76)",
            width: "250px",
          }}
        >
          <Segment
            compact
            attached
            style={{
              textAlign: "center",
              backgroundColor: "rgba(27, 27, 27, 0.76)",
            }}
          >
            <Input
              style={{
                margin: "10px",
                marginLeft: "0px",
                fontFamily: "Roboto",
              }}
              placeholder="TITLE"
              value={title}
              onChange={event => {
                setTitle(event.target.value);
              }}
            />
            <Form.TextArea
              style={{
                margin: "10px",
                marginLeft: "0px",
                fontFamily: "Roboto",
              }}
              placeholder="TEXT"
              name="noteText"
              value={text}
              onChange={event => {
                setText(event.target.value);
              }}
            />{" "}
            <Button
              secondary
              inverted
              fluid
              style={{
                fontFamily: "Roboto",
                color: "white",
                marginTop: "10px",
              }}
              onClick={upsertNote}
            >
              <Icon name="plus square outline" />{" "}
            </Button>
            <br></br>
            {error.isVisible && (
              <ErrorSegment>{error.errorMessage}</ErrorSegment>
            )}
            <Segment
              compact
              attached
              style={{
                backgroundColor: "rgba(27, 27, 27, 0.76)",
              }}
            >
              {showText ? (
                <>
                  <Step.Group>
                    <Step
                      style={{
                        padding: "0px",
                        margin: "5px",
                        color: "white",
                        backgroundColor: "rgba(1, 1, 5, 0)",
                      }}
                    >
                      <Step.Content>
                        {notes.map(note => {
                          return (
                            <h2
                              key={note.id}
                              onClick={() => {
                                setCurrentNote(note);
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: "25px",
                                  margin: "0px",
                                }}
                              >
                                {note.title}
                              </p>
                              <p
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: "15px",
                                }}
                              >
                                {note.text}
                              </p>
                            </h2>
                          );
                        })}
                      </Step.Content>
                    </Step>
                  </Step.Group>
                  <Button
                    secondary
                    inverted
                    fluid
                    style={{
                      fontFamily: "Roboto",
                      color: "white",
                      marginTop: "10px",
                    }}
                    onClick={addNotesWidget}
                  >
                    {button}
                  </Button>
                  {/* If the add to widget function and profileBtn visibility is set to true show go home button */}
                  {profileBtnVisibility && <ToProfileButton />}
                </>
              ) : (
                <Step.Group>
                  <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
                    <Icon name="pencil" style={{ color: "white" }} />
                    <Step.Content>
                      <Step.Title
                        style={{ color: "white", fontFamily: "Bungee" }}
                      >
                        NOTES
                      </Step.Title>
                      <Step.Description
                        style={{
                          fontWeight: "100",
                          color: "white",
                        }}
                      >
                        <p style={{ fontSize: "10px" }}>
                          {" "}
                          ENTER A TITLE<br></br>ENTER TEXT
                        </p>
                        <p style={{ fontSize: "10px" }}> CREATE A NOTE</p>
                      </Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>
              )}
            </Segment>
          </Segment>
        </Segment>
      </Grid>
    </div>
  );
}
export default NoteWidgetGen;
