import React, { useState, useEffect } from "react";
import { Icon, Input, Step, Segment } from "semantic-ui-react";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";

function NoteWidgetGen() {
  const { user } = useAuth();
  const [button, setButton] = useState("");
  const [title, setTitle] = useState([]);

  const addNoteWidget = event => {
    event.preventDefault();
    setButton("Widget Added");
    API.addUserWidget(user.id, "note", { title }).catch(err => alert(err));
  };

  useEffect(() => {
    alert("hello");
  });

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
          icon={<Icon name="plus square outline" inverted circular link />}
          placeholder="ENTER TITLE "
          onClick={addNoteWidget}
          onChange={event => {
            setTitle(event.target.value);
            console.log(title);
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
            <Step style={{ backgroundColor: "rgba(1, 1, 5, 0)" }}>
              <Icon name="pencil" style={{ color: "white" }} />
              <Step.Content>
                <Step.Title style={{ color: "white", fontFamily: "Roboto" }}>
                  NOTES
                </Step.Title>
                <Step.Description
                  style={{
                    fontWeight: "100",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  ENTER A TITLE
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
        </Segment>
      </Segment>
    </div>
  );
}
export default NoteWidgetGen;
