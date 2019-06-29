import React, { Component } from "react";
import Todo from "./Todo";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Todo />
        <h3>Form</h3>
      </div>
    );
  }
}

export default NewTodoForm;
