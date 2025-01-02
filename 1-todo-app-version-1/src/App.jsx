function App() {
  return (
    <center>
      <h1>Todo App</h1>
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
      <br />
      <div class="row">
        <div class="col-5">Milk</div>
        <div class="col">10-10-2022</div>
        <div class="col">
          <button type="button" class="btn btn-outline-danger">
            Remove
          </button>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-5">Bread</div>
        <div class="col">15-10-2022</div>
        <div class="col">
          <button type="button" class="btn btn-outline-danger">
            Remove
          </button>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-5">Vegitables</div>
        <div class="col">17-10-2022</div>
        <div class="col">
          <button type="button" class="btn btn-outline-danger">
            Remove
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
