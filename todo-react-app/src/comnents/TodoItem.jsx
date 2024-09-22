import React from "react";

export default function TodoItem({ todoName, todoDate, onDeleteClicked }) {
  return (
    <div className="container text-center">
      <div className="row hk-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClicked(todoName)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
