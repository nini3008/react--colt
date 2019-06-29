import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div className="todoBg">
        <span>{this.props.task}</span>
        <span>Edit</span>
        <span onClick={this.props.remove}>Delete</span>
      </div>
    );
  }
}

export default Todo;
