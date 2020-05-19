import React, { Component } from "react";
import WeatherWidgetGen from "./WeatherWidgetGen";
import ParkWidgetGen from "./ParkWidgetGen";
import NoteWidgetGen from "./NoteWidgetGen";

import { Menu, Header, Grid, Segment, Icon } from "semantic-ui-react";

const widgets = {
  notes: {
    topic: "NOTES",
    class: "widgetDisplay",
    widgetType: <NoteWidgetGen />,
    about: "Compose a note",
  },
  weather: {
    topic: "WEATHER",
    class: "weatherDisplay",
    widgetType: <WeatherWidgetGen />,
    about: "Pick a City",
  },
  parks: {
    topic: "PARKS",
    class: "widgetDisplay",
    widgetType: <ParkWidgetGen />,
    about: "Pick a National Park",
  },
};

export default class WidgetGeneratorSort extends Component {
  state = {
    activeItem: null,
    currentPage: "",
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
                as="menuSoter"
                className="widgets"
                title="notes"
                name="NOTES"
                active={activeItem === "NOTES"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as="menuSoter"
                className="widgets"
                title="weather"
                name="WEATHER"
                active={activeItem === "WEATHER"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as="menuSoter"
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
