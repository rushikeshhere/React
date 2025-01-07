import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";

function App() {
  let todoItems = [
    { name: " Buy Milk", dueDate: "2022-01-01" },
    { name: "Go to nanded", dueDate: "2025-01-02" },
    { name: "Birth certificate work ", dueDate: "2025-01-02  " },
  ];

  return (
    <center>
      <AppName />
      <br />
      <AddTodo />
      <br />
      <TodoItem todoItems={todoItems} />
      <br />
    </center>
  );
}

export default App;
