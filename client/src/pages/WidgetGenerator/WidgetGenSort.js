import React, { Component } from "react";
import NewWeatherWidget from "./NewWeatherWidget";
import ParksWidget from "./ParksWidget";

import {
  Menu,
  Grid,
  Segment
} from "semantic-ui-react";

const widgets = {
  notes: {
    topic: "NOTES",
    class: "widgetDisplay",
    widgetType: "",
    about: "Compose a note"
  },
  weather: {
    topic: "WEATHER",
    class: "weatherDisplay",
    widgetType: <NewWeatherWidget/>,
    about: "Pick a City"
  },
  parks: {
    topic: "PARKS",
    class: "widgetDisplay",
    widgetType:  <ParksWidget/>,
    about: "Pick a National Park"
  }
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
          <Segment attached>Please select a widget</Segment>
          <Grid className="ticker" divided="vertically">
            <Grid.Row columns={1} className="ticker">
              <Grid.Column centered className="ticker">
                <Segment attached className="widgetForm" compact textAlign="center" inverted>
                  <Menu inverted pointing secondary>
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <Grid verticalAlign="middle" centered>
          <Grid.Row columns={1} className="ticker">
            <Grid.Column centered>
              {this.state.currentPage.widgetType}
            </Grid.Column>
        
          </Grid.Row>
        </Grid>
      </>
    );
  }
}
