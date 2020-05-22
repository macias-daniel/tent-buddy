import React, { useState, useEffect } from "react";
import { Icon, Input, Step, Segment, Button, Form } from "semantic-ui-react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";

function NoteWidgetGen() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [savedTitle, setSavedTitle] = useState([]);
  const [button, setButton] = useState("Add Widget");

  const addNoteWidget = event => {
    event.preventDefault();
    setButton("Widget Added");
    API.addUserWidget(user.id, "note", { title, text }).catch(err =>
      alert(err),
    );
  };

  useEffect(() => {
    API.getUser(user.id).then(response => {
      console.log(response);
      response.data.widgets.forEach(element => {
        if (element.type === "note") {
          console.log(element.data.title);
          savedTitle.push({
            title: element.data.title,
            text: element.data.text,
            id: element._id,
          });
          console.log(savedTitle);
        }
      });
    });
  }, [user.id, savedTitle]);

  return (
    <div>
      <br />
      <Segment
        attached
        block
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
              // onClick={console.log("works")}
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
              {savedTitle.map(element => {
                return (
                  <h3 key={element.id} id={element.id}>
                    {element.title}
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
          onClick={addNoteWidget}
        >
          {button}
        </Button>
      </Segment>
    </div>
  );
}
export default NoteWidgetGen;
