import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div className="todoBg">
        <ul>
          <li className="listBG">
            <span>{this.props.task}</span>
            <span>Edit</span>
            <span onClick={this.handleRemove}>Delete</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
