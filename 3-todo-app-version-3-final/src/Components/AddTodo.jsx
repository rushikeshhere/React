import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddTodo({ addTodoItems }) {
  const [itemName, setItemName] = useState("");
  const [itemDueDate, setItemDueDate] = useState("");

  const handleTodo = () => {
    addTodoItems(itemName, itemDueDate);
    setItemDueDate("");
    setItemName("");
  };

  return (
    <div className="row">
      <div className="col-5">
        <input
          type="text"
          placeholder="Enter your Task"
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="col">
        <input
          type="date"
          value={itemDueDate}
          onChange={(e) => setItemDueDate(e.target.value)}
        />
      </div>
      <div className="col">
        <button type="button" className="btn btn-success" onClick={handleTodo}>
          <IoAddCircleSharp />
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
