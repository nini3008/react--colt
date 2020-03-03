import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = ({
  task,
  completed,
  removeTodo,
  todoId,
  toggleTodo,
  editTodo
}) => {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={todoId}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex="-1"
            checked={completed}
            onClick={() => toggleTodo(todoId)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(todoId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit">
              <EditIcon onClick={toggle} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
