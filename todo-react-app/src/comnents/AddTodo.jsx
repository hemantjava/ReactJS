import React from "react";

export default function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-5">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success hk-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
