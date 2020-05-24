import React, { useState, useEffect } from "react";
import { Icon, Input, Step, Segment, Button, Form } from "semantic-ui-react";
// import API from "../../utils/API";
// import { useAuth } from "../../utils/auth";
import { v4 as uuidv4 } from "uuid";

function NoteWidgetGen() {
  // const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [noteId, setNoteId] = useState("");
  const [isNewNote, setIsNewNote] = useState(true);
  const [notes, setNotes] = useState(localStorage.getItem("Notes") || []);
  const [button, setButton] = useState("Add Widget");

  const upsertNote = () => {
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
      note.title= title;
      setNotes([...notes]);
      setNoteId("");
      setIsNewNote(true);
    }
    setTitle("");
    setText("");
  };

  const setCurrentNote = note => {
    setText(note.text);
    setTitle(note.title);
    setNoteId(note.id);
    setIsNewNote(false);
  };

  useEffect(() => {
    localStorage.setItem("Notes", notes);
  });

  return (
    <div>
      <br />
      <Segment
        attached
        inverted
        style={{ backgroundColor: "rgba(27, 27, 27, 0.76)", width: "250px" }}
      >
        <Input
          style={{ margin: "10px" }}
          icon={
            <Icon
              name="plus square outline"
              inverted
              circular
              link
              onClick={upsertNote}
            />
          }
          placeholder="ENTER TITLE "
          value={title}
          onChange={event => {
            setTitle(event.target.value);
            setButton("Add Widget");
          }}
        />
        <Form.TextArea
          placeholder="Note Text"
          name="noteText"
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
        />

        <Segment
          compact
          attached
          style={{
            width: "225px",
            backgroundColor: "rgba(27, 27, 27, 0.76)",
          }}
        >
          <Step.Group>
            <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}></Step>
            <span style={{ color: "white" }}>
              {notes.map(note => {
                return (
                  <h3
                    key={note.id}
                    onClick={() => {
                      setCurrentNote(note);
                    }}
                  >
                    {note.title}
                  </h3>
                );
              })}
            </span>
          </Step.Group>
        </Segment>
        <Button
          secondary
          inverted
          fluid
          style={{ fontFamily: "Roboto", color: "white" }}
          // onClick={() => {}}
        >
          {button}
        </Button>
      </Segment>
    </div>
  );
}
export default NoteWidgetGen;
