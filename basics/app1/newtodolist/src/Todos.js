import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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
    console.log("save");
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: [evt.target.value]
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
        <div>
          <ul>
            <li>{this.props.task}</li>
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
