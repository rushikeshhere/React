import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";

function App() {
  return (
    <center>
      <AppName />
      <br />
      <AddTodo />
      <br />
      <TodoItem1 items={"Milk"} date={"2022-01-01"} />
      <br />
      <TodoItem1 items={"Go to nanded"} date={"2025-01-02"} />
      <br />
      <TodoItem1 items={"Birth certificate work "} date={"2025-01-02  "} />

      <br />
    </center>
  );
}

export default App;
