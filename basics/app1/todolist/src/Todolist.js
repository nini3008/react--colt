import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todos from "./Todo";

class TodoList extends Component {
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
    const Todoss = this.state.Todos.map(Todo => {
      return (
        <Todos
          task={Todo.task}
          id={Todo.id}
          key={Todo.id}
          remove={() => this.remove(Todo.id)}
        />
      );
    });
    return (
      <div>
        <h1>TodoList</h1>
        {Todoss}
        <NewTodoForm createTodos={this.createTodos} />
      </div>
    );
  }
}

export default TodoList;
