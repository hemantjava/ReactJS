import React from "react";
import AppName from "./comnents/AppName";
import AddTodo from "./comnents/AddTodo";
import TodoItem from "./comnents/TodoItem";
import TodoItem2 from "./comnents/TodoItem2";

export default function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem />
        <TodoItem2 />
      </center>
    </div>
  );
}
