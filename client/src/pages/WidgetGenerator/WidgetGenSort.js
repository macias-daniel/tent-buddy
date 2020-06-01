import React, { Component } from "react";
import WeatherWidgetGen from "./WeatherWidgetGen";
import ParkWidgetGen from "./ParkWidgetGen";
import NoteWidgetGen from "./NoteWidgetGen";
import TrailWidgetGen from "./TrailWidgetGen";
import { Menu, Segment, Grid } from "semantic-ui-react";

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
  trails: {
    topic: "TRAILS",
    class: "widgetDisplay",
    widgetType: <TrailWidgetGen />,
    about: "Find a Trail",
  },
};

export default class WidgetGeneratorSort extends Component {
  state = {
    activeItem: false,
    currentPage: "",
  };

  handleItemClick = (e, { name, title }) =>
    this.setState({ activeItem: name, currentPage: widgets[title] });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Grid style={{ margin: "0px", padding: "0px" }} centered>
          <div style={{ margin: "0px", padding: "0px" }}>
            <Segment
              style={{ width: "250px", margin: "0px", padding: "0px" }}
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
                <Menu.Item
                  className="widgets"
                  title="trails"
                  name="TRAILS"
                  active={activeItem === "TRAILS"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Segment>
            {this.state.currentPage.widgetType}
          </div>
        </Grid>
      </>
    );
  }
}
