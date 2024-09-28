import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <h2>
        <marquee direction="left">Enjot your Day</marquee>
      </h2>
    )
  );
};
export default WelcomeMessage;
