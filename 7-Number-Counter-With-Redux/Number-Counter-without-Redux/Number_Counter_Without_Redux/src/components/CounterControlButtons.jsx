const CounterControlButtons = ({ setCount, count }) => {
  return (
    <div className="d-inline-flex gap-2 mb-5">
      <button
        className="custom-btn increment-button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment : +1
      </button>
      <button
        className="custom-btn decrement-button"
        type="button"
        onClick={() => setCount(count - 1)}
      >
        Decrement : -1
      </button>
      <button
        className="custom-btn reset-button"
        type="button"
        onClick={() => setCount(0)}
      >
        Reset : 0
      </button>
    </div>
  );
};
export default CounterControlButtons;
