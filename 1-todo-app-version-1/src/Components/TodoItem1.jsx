function TodoItem1({ items, date }) {
  return (
    <div class="row">
      <div class="col-5">{items}</div>
      <div class="col">{date}</div>
      <div class="col">
        <button type="button" class="btn btn-outline-danger">
          Remove
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
