import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";

function App() {
  // let todoItems = [
  //   { name: " Buy Milk", dueDate: "2022-01-01" },
  //   { name: "Go to nanded", dueDate: "2025-01-02" },
  //   { name: "Birth certificate work ", dueDate: "2025-01-02  " },
  // ];
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = (itemName, itemDueDate) => {
    setTodoItems((prev) => [...prev, { name: itemName, dueDate: itemDueDate }]);
  };

  const handleDeleteTodo = (todoName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItem);
  };

  return (
    <center>
      <AppName />
      <br />
      <AddTodo addTodoItems={handleAddTodo} />
      <br />
      <WelcomeMessage todoItem={todoItems}></WelcomeMessage>
      <TodoItem todoItem={todoItems} handleDeleteTodo={handleDeleteTodo} />
      <br />
    </center>
  );
}

export default App;
