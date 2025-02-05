import { useDispatch } from "react-redux";

const CounterControlButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="d-inline-flex gap-2 mb-5">
      <button
        className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
        type="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment : +1
        <svg className="bi ms-2" width="24" height="24">
          <use xlinkHref="#arrow-right-short"></use>
        </svg>
      </button>
      <button
        className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
        type="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement : -1
      </button>
    </div>
  );
};
export default CounterControlButtons;
