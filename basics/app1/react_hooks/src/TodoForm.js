import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  // react hooks for the user input state. details are in the hooks folder.
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
//to do
export default TodoForm;
