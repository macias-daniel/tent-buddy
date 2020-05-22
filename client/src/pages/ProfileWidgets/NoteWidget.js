import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


class NoteWidget extends Component {
  //note title and text as part of state
  state = {
    noteTitle: "",
    noteText: "",
  };

  //on change update the state with the new values
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    //on submit take the values in state
    const { noteTitle, noteText } = this.state;
    //generate a unique id
    const id = uuidv4();
    //push new note into notes array
    const newNote = {
      title: noteTitle,
      text: noteText,
      id: id
    };

    this.saveNote(newNote);
  };



  saveNote = note => {
    return axios.post("/api/notes", note);
  };

  getNotes = () => {
    return axios.get("/api/notes");
  };

  deleteNote = (id) => {
    return axios.delete("/api/notes/"+ id);
  };
  
  updateNote = (id) => {
    return axios.patch("/api/notes/"+ id);
  };


  render() {
    const { noteTitle, noteText } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Note Title"
              name="noteTitle"
              value={noteTitle}
              onChange={this.handleChange}
            />
            <Form.TextArea
              placeholder="Note Text"
              name="noteText"
              value={noteText}
              onChange={this.handleChange}
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default NoteWidget;
