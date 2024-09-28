import React, { useState } from "react";
import AppName from "./comnents/AppName";
import AddTodo from "./comnents/AddTodo";
import TodoList from "./comnents/TodoList";
import "./App.css";
import WelcomeMessage from "./comnents/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date:${itemDueDate}`);
    //best way to set updated value in async call this is functional update
    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const handleDeleteItem = (todoItemName) => {
    const deleteItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(deleteItem);
    console.table(deleteItem);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: handleNewItem,
        deleteItem: handleDeleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoList />
      </center>
    </TodoItemsContext.Provider>
  );
}
