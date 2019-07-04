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
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.setState({
      Todos: this.state.Todos.filter(Todo => Todo.id !== id)
    });
  }

  createTodos(newTodo) {
    this.setState({
      Todos: [...this.state.Todos, newTodo]
    });
  }

  render() {
    const Todosfactory = this.state.Todos.map(Todo => (
      <Todos
        task={Todo.task}
        id={Todo.id}
        key={Todo.id}
        completed={Todo.completed}
        remove={this.remove}
      />
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
