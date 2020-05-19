import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

class WidgetBumper extends Component {
  state = { open: false };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => this.setState({ open: false });

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;

    return (
      <div>
        <Button
          onClick={this.closeConfigShow(false, true)}
          style={{ width: "225px", fontFamily: "Roboto", backgroundColor:"black", fontWeight: "100", textAlign: "right" }}
          attached="top"
        >
          {" "}
          <Icon style ={{color:"white"}}name="angle double up" />
        </Button>

        <Modal
          size="mini"
          open={open}
          basic
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header style={{fontFamily:"Bungee Inline", fontSize:"30px"}}>Delete Widget</Modal.Header>
          <Modal.Content inverted>
            <p>Are you sure you want to delete your widget?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button style={{fontFamily:"Roboto"}} onClick={this.close} inverted color="red">
              DELETE
            </Button>
            <Button onClick={this.close} inverted icon>
              <Icon name="external share" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default WidgetBumper;