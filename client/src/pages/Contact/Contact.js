import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      button: "Submit",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await axios.post("/api/contact", {
      name,
      email,
      message,
    });

  }
  // this.setState({ name: "", email: "", message: "", button: "Sent" });

  render() {
    const { name, email, message, button } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Input
          required
          label="Email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Field
          required
          label="Message"
          placeholder="Message"
          name="message"
          value={message}
          control={TextArea}
          onChange={this.handleChange}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content={button}
        />
      </Form>
    );
  }
}

export default Contact;
