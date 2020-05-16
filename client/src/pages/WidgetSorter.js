import React, { Component } from "react";

import {
  Menu,
  Header,
  Grid,
  Segment,
  Icon
} from "semantic-ui-react";

const widgets = {
  notes: {
    topic: "NOTES",
    class: "widgetDisplay",
    icon: "compose",
    about: "Compose a note"
  },
  weather: {
    topic: "WEATHER",
    class: "weatherDisplay",
    icon: "cloud",
    about: "Pick a City"
  },
  parks: {
    topic: "PARKS",
    class: "widgetDisplay",
    icon: "tree",
    about: "Pick a National Park"
  }
};

const square = { width: 100, height: 100 };
export default class Projects extends Component {
  state = {
    activeItem: "WEATHER",
    currentPage: widgets.weather
  };

  handleItemClick = (e, { name, title }) =>
    this.setState({ activeItem: name, currentPage: widgets[title] });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <div>
          <Grid className="ticker" divided="vertically">
            <Grid.Row columns={2} className="ticker">
              <Grid.Column centered className="ticker">
                <Segment compact textAlign="center" inverted>
                  <Menu inverted pointing secondary>
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <Grid verticalAlign="middle" centered>
          <Grid.Row columns={2} className="ticker">
            <Grid.Column centered>
              <Segment
                className="widgetGrid"
                centered
                circular
                style={square}
              >
                <Icon size="huge" name={this.state.currentPage.icon} />
              </Segment>
            </Grid.Column>
            <Grid.Column centered>
              <Header>
                <p className="widgetDisplay" style={{ color: "white" }}>
                  {this.state.currentPage.topic}
                </p>
                <Header.Subheader>
                  <p className="placeholder" style={{ color: "white" }}>
                    {this.state.currentPage.about}
                  </p>
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}
