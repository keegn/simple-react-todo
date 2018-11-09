import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => (
  <div>
    {props.todos.map((todo, index) => (
      <TodoItem
        handleCompleted={props.handleCompleted}
        key={index}
        data={todo}
      />
    ))}
  </div>
);

export default TodoList;
