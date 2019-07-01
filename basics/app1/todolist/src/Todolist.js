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
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
  update(id, updatedTask) {
    const updatedTodos = this.state.Todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      Todos: updatedTodos
    });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.Todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      Todos: updatedTodos
    });
  }
  render() {
    const Todoss = this.state.Todos.map(Todo => (
      <Todos
        task={Todo.task}
        id={Todo.id}
        key={Todo.id}
        completed={Todo.completed}
        remove={this.remove}
        updatedTodo={this.update}
        toggleCompletion={this.toggleCompletion}
      />
    ));
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
