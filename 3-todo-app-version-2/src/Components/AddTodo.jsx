function AddTodo() {
  return (
    <div className="row">
      <div className="col-5">
        <input type="text" placeholder="Enter your Task" />
      </div>
      <div className="col">
        <input type="date" />
      </div>
      <div className="col">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
