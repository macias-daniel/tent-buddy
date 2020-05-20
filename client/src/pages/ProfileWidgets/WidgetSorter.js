import React, { Component } from "react";
import WeatherWidget from "./WeatherWidget";
// import ParksWidget from "./ParksWidget";

import { Menu, Segment } from "semantic-ui-react";

const widgets = {
  notes: {
    topic: "NOTES",
    class: "widgetDisplay",
    // widgetType: <NotesWidget />,
    about: "Compose a note",
  },
  weather: {
    topic: "WEATHER",
    class: "weatherDisplay",
    widgetType: <WeatherWidget />,
    about: "Pick a City",
  },
  parks: {
    topic: "PARKS",
    class: "widgetDisplay",
    // widgetType: <ParksWidget />,
    about: "Pick a National Park",
  },
};

export default class Projects extends Component {
  state = {
    activeItem: "WEATHER",
    currentPage: widgets.weather,
  };

  handleItemClick = (e, { name, title }) =>
    this.setState({ activeItem: name, currentPage: widgets[title] });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <div>
          <Segment
            attached
            className="widgetForm"
            compact
            textAlign="center"
            inverted
          >
            <Menu inverted pointing secondary style={{ marginTop: "0px" }}>
              <Menu.Item

                className="widgets"
                title="notes"
                name="NOTES"
                active={activeItem === "NOTES"}
                onClick={this.handleItemClick}
              />
              <Menu.Item

                className="widgets"
                title="weather"
                name="WEATHER"
                active={activeItem === "WEATHER"}
                onClick={this.handleItemClick}
              />
              <Menu.Item

                className="widgets"
                title="parks"
                name="PARKS"
                active={activeItem === "PARKS"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Segment>
        </div>
        {this.state.currentPage.widgetType}
      </>
    );
  }
}
