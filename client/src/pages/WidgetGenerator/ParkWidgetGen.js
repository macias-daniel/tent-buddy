import React from "react";
import { Icon, Input, Step, Segment } from "semantic-ui-react";

function ParkWidgetGen() {
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
          icon={<Icon name="search" inverted circular link />}
          placeholder="ENTER PARK "
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
              <Icon name="tree" style={{ color: "white" }} />
              <Step.Content>
                <Step.Title style={{ color: "white", fontFamily: "Roboto" }}>
                  PARKS
                </Step.Title>
                <Step.Description
                  style={{
                    fontWeight: "100",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  ENTER A PARK
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
        </Segment>
      </Segment>
    </div>
  );
}
export default ParkWidgetGen;
