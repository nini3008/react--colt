import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: [evt.target.value]
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newState = { ...this.state, id: uuid(), completed: false };
    this.props.createTodos(newState);
    this.setState({
      task: ""
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            name="task"
            placeholder="Enter New Todo"
            id="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
