import React, { useState } from "react";

export default function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-5">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success hk-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
