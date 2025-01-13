import TodoItem1 from "./TodoItem1";
import style from "./TodoItemsContainer.module.css";

const TodoItem = ({ todoItem }) => {
  return (
    <div className={style.container}>
      {todoItem.map((item) => (
        <TodoItem1 key={item.name} todoName={item.name} date={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItem;