import React, { useState } from "react";
import AppName from "./comnents/AppName";
import AddTodo from "./comnents/AddTodo";
import TodoList from "./comnents/TodoList";
import "./App.css";
import WelcomeMessage from "./comnents/WelcomeMessage";

export default function Mian() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date:${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItem);
  };
  const handleDeleteItem = (todoItemName) => {
    const deleteItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(deleteItem);
    console.table(deleteItem);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoList todoItems={todoItems} onDeleteClicked={handleDeleteItem} />
    </center>
  );
}
