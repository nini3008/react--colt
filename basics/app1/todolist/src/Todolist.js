import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
