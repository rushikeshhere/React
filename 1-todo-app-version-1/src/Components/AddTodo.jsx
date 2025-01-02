function AddTodo() {
  return (
    <div class="row">
      <div class="col-5">
        <input type="text" placeholder="Enter your Task" />
      </div>
      <div class="col">
        <input type="date" />
      </div>
      <div class="col">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
