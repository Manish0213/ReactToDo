import React from "react";

const AddToDo = () => {
  return (
    <div className="container my-5">
        <h2>AddToDo</h2>
      <form className="my-3">
        <label for="exampleInputEmail1" class="form-label">
          Title
        </label>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
