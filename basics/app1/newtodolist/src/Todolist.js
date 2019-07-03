import React, { Component } from "react";
import Todos from "./Todos";
import NewTodoForm from "./NewTodoForm";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: []
    };

    this.createTodos = this.createTodos.bind(this);
  }

  createTodos(newTodo) {
    this.setState({
      Todos: [...this.state.Todos, newTodo]
    });
  }

  render() {
    const Todosfactory = this.state.Todos.map(Todo => (
      <Todos task={Todo.task} />
    ));
    return (
      <div>
        <h1>New Todolist App</h1>
        {Todosfactory}
        <NewTodoForm createTodos={this.createTodos} />
      </div>
    );
  }
}

export default Todolist;
