import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map(todo => (
            <>
              <Todo
                todoId={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
