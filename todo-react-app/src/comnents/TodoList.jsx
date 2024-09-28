import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoList = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="container table">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};
export default TodoList;
