import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";

function Todoapp() {
  const initialTodos = [
    { id: "1", task: "Clean fish tank", completed: false },
    { id: "2", task: "wash car", completed: true },
    { id: "3", task: "Grow Beard", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newToDo => {
    setTodos([...todos, { id: uuidv4(), task: newToDo, completed: false }]);
  };

  const removeTodo = todoId => {
    const updatedtodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedtodos);
  };

  const toggleTodo = todoId => {
    const updatedtodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedtodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedtodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedtodos);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Todoapp;
