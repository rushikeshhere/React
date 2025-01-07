import TodoItem1 from "./TodoItem1";
import style from "./TodoItemsContainer.module.css";
const TodoItem = ({ todoItems }) => {
  return (
    <div className={style.container}>
      {todoItems.map((item) => (
        <TodoItem1 todoName={item.name} date={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItem;
