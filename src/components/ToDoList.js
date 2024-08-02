import React from "react";

const ToDoList = ({ todos }) => {
  return (
    <div className="container d-flex gap-5 my-5">
      {todos.map((todo) => (
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">{todo.title}</h5>
            <p class="card-text">{todo.desc}</p>
            <a href="#" class="btn btn-primary">
              Update
            </a>
            <a href="#" class="btn btn-danger mx-2">
              Delete
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
