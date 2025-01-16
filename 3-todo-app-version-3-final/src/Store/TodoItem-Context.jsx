import { createContext } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewTodo: () => {},
  deleteTodo: () => {},
});
