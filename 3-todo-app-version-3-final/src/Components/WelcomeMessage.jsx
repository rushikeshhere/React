import { useContext } from "react";
import { TodoItemContext } from "../Store/TodoItem-Context";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemContext);

  return todoItems.length === 0 && <p>Enjoy your day!</p>;
};
export default WelcomeMessage;
