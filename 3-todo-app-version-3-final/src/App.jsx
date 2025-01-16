import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";
import { TodoItemContext } from "./Store/TodoItem-Context";

function App() {
  // let todoItems = [
  //   { name: " Buy Milk", dueDate: "2022-01-01" },
  //   { name: "Go to nanded", dueDate: "2025-01-02" },
  //   { name: "Birth certificate work ", dueDate: "2025-01-02  " },
  // ];
  const [todoItems, setTodoItems] = useState([]);

  const addNewTodo = (itemName, itemDueDate) => {
    setTodoItems((prev) => [...prev, { name: itemName, dueDate: itemDueDate }]);
  };

  const deleteTodo = (todoName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewTodo, deleteTodo }}>
      <center>
        <AppName />
        <br />
        <AddTodo />
        <br />
        <WelcomeMessage></WelcomeMessage>
        <TodoItem />
        <br />
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
