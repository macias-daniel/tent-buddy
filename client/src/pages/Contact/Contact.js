import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("API_URI", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={e => this.formSubmit(e)}>
        <label class="message" htmlFor="message-input">
          Your Message
        </label>
        <textarea
          onChange={e => this.setState({ message: e.target.value })}
          name="message"
          className="message-input"
          type="text"
          placeholder="Please write your message here"
          value={this.state.message}
          required
        />

        <label className="message-name" htmlFor="message-name">
          Your Name
        </label>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          name="name"
          className="message-name"
          type="text"
          placeholder="Your Name"
          value={this.state.name}
        />

        <label className="message-email" htmlFor="message-email">
          Your Email
        </label>
        <input
          onChange={e => this.setState({ email: e.target.value })}
          name="email"
          className="message-email"
          type="email"
          placeholder="your@email.com"
          required
          value={this.state.email}
        />

        <div className="button--container">
          <button type="submit" className="button button-primary">
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}

export default Contact;
