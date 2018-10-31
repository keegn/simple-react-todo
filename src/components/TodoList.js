import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => (
  <div>{props.todos.map(todo => <TodoItem key={todo} todo={todo} />)}</div>
);

export default TodoList;
