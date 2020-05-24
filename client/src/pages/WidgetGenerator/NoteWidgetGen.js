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
import { v4 as uuidv4 } from "uuid";

function NoteWidgetGen() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [noteId, setNoteId] = useState("");
  const [isNewNote, setIsNewNote] = useState(true);
  const [notes, setNotes] = useState([]);
  const [button, setButton] = useState("Add Widget");
  const [showText, setShowText] = useState(false);
  const [error, setError] = useState({ isVisible: false, errorMessage: "" });

  const upsertNote = () => {
    if (title === "" || text === "") {
      return setError({
        isVisible: true,
        errorMessage: "PLEASE ENTER REQUIRED FIELDS",
      });
    } else {
      setError("");
    }
    if (isNewNote) {
      setNotes([
        ...notes,
        {
          title,
          text,
          id: uuidv4(),
        },
      ]);
    } else {
      const note = notes.find(n => n.id === noteId);
      note.text = text;
      note.title = title;
      setNotes([...notes]);
      setNoteId("");
      setIsNewNote(true);
    }

    setShowText(!showText);
    setTitle("");
    setText("");
  };

  const setCurrentNote = note => {
    setText(note.text);
    setTitle(note.title);
    setNoteId(note.id);
    setIsNewNote(false);
  };

  //POST request to DB
  const addNotesWidget = event => {
    event.preventDefault();
    setButton("Widget Added");
    API.addUserWidget(user.id, "notes", {
      notes: notes
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
          <Segment attached inverted>
            <Input
              style={{ margin: "10px", marginLeft: "0px" }}
              icon={
                <Icon
                  name="plus square outline"
                  inverted
                  circular
                  link
                  onClick={upsertNote}
                />
              }
              placeholder="ENTER TITLE"
              value={title}
              onChange={event => {
                setTitle(event.target.value);
                setButton("Add Widget");
              }}
            />
            <Form.TextArea
              placeholder="ENTER TEXT"
              name="noteText"
              value={text}
              onChange={event => {
                setText(event.target.value);
              }}
            />
            {error.isVisible && (
              <ErrorSegment>{error.errorMessage}</ErrorSegment>
            )}
            {showText && (
              <>
                <Segment
                  compact
                  attached
                  style={{
                    textAlign: "center",
                    width: "195px",
                    backgroundColor: "rgba(27, 27, 27, 0.76)",
                  }}
                >
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
                              {note.title}
                            </h2>
                          );
                        })}
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Segment>
                <Button
                  secondary
                  inverted
                  fluid
                  style={{ fontFamily: "Roboto", color: "white" }}
                  onClick={addNotesWidget}
                >
                  {button}
                </Button>
              </>
            )}
          </Segment>
        </Segment>
      </Grid>
    </div>
  );
}
export default NoteWidgetGen;
