import { useContext } from "react";
import { TodoItemContext } from "../Store/TodoItem-Context";
import TodoItem1 from "./TodoItem1";
import style from "./TodoItemsContainer.module.css";

const TodoItem = () => {
  const { todoItems } = useContext(TodoItemContext);

  return (
    <div className={style.container}>
      {todoItems.map((item) => (
        <TodoItem1 key={item.name} todoName={item.name} date={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItem;
