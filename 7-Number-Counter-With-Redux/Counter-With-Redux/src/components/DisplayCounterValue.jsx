import { useSelector } from "react-redux";

const DisplayCounterValue = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <p className="col-lg-8 mx-auto fs-5 text-muted">
      Counter Value : <span> {counter}</span>
    </p>
  );
};
export default DisplayCounterValue;
