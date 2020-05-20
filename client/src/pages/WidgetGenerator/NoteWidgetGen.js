import React from "react";
import { Icon, Input, Step, Segment } from "semantic-ui-react";

function NoteWidgetGen() {
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
          onClick
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
              <Icon name="cloud" style={{ color: "white" }} />
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
