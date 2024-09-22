import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, onDeleteClicked }) => {
  return (
    <div className="container table">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClicked={onDeleteClicked}
        />
      ))}
    </div>
  );
};
export default TodoList;
