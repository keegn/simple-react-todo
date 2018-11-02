import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => (
  <div>
    {props.todos.map(todo => (
      <TodoItem
        handleCompleted={props.handleCompleted}
        key={todo.id}
        data={todo}
      />
    ))}
  </div>
);

export default TodoList;
