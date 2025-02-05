const DisplayCounterValue = ({ counter }) => {
  return (
    <p className="col-lg-8 mx-auto fs-5 text-muted">
      Counter Value : <span> {counter}</span>
    </p>
  );
};
export default DisplayCounterValue;
