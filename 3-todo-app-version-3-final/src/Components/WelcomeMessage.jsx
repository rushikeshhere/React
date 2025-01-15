const WelcomeMessage = ({ todoItem }) => {
  return todoItem.length === 0 && <p>Enjoy your day!</p>;
};
export default WelcomeMessage;
