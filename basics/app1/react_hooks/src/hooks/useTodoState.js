import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useTodoState = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newToDo => {
      setTodos([...todos, { id: uuidv4(), task: newToDo, completed: false }]);
    },
    removeTodo: todoId => {
      const updatedtodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedtodos);
    },
    toggleTodo: todoId => {
      const updatedtodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedtodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedtodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedtodos);
    }
  };
};

export default useTodoState;
