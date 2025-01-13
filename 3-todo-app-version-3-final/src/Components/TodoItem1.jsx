import style from "./TodoItemsContainer.module.css";
function TodoItem1({ todoName, date }) {
  return (
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col">{date}</div>
      <div className={`col ${style.container}`}>
        <button type="button" className="btn btn-outline-danger">
          Remove
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
