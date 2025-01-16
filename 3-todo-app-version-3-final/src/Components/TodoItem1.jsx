import { useContext } from "react";
import style from "./TodoItemsContainer.module.css";
import { TodoItemContext } from "../Store/TodoItem-Context";
function TodoItem1({ todoName, date }) {
  const { deleteTodo } = useContext(TodoItemContext);
  return (
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col">{date}</div>
      <div className={`col ${style.container}`}>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteTodo(todoName)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
