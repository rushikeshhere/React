import { useContext, useRef, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoItemContext } from "../Store/TodoItem-Context";
function AddTodo() {
  const { addNewTodo } = useContext(TodoItemContext);
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  const handleTodo = () => {
    const itemName = todoNameElement.current.value;
    const itemDueDate = todoDueDateElement.current.value;
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
    addNewTodo(itemName, itemDueDate);
  };

  return (
    <div className="row">
      <div className="col-5">
        <input
          type="text"
          placeholder="Enter your Task"
          ref={todoNameElement}
        />
      </div>
      <div className="col">
        <input type="date" ref={todoDueDateElement} />
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
