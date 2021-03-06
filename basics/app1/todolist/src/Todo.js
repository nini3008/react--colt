import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRemove() {
    this.props.remove(this.props.id);
  }
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updatedTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  }

  handleToggle() {
    this.props.toggleCompletion(this.props.id);
  }
  handleChange(evt) {
    this.setState({
      task: [evt.target.value]
    });
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todoBg">
          <ul className="todoUL">
            <li
              onClick={this.handleToggle}
              className={this.props.completed ? "completed" : ""}
            >
              {this.props.task}
            </li>
          </ul>

          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
