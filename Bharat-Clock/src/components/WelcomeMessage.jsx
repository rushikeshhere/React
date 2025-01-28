import CurrentTime from "./CurrentTime";

const WelcomeMessage = ({ onClickOpenTimePage }) => {
  return (
    <div>
      <h1>Welcome to Bharat Clock</h1>
      <button onClick={onClickOpenTimePage}>Click me to get time:</button>
    </div>
  );
};
export default WelcomeMessage;
