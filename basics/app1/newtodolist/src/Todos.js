import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.task}</li>
        </ul>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Todo;
