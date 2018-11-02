import React from "react";

const TodoItem = props => (
  <div onClick={() => props.handleCompleted(props.data.id)}>
    {props.data.task}
  </div>
);
export default TodoItem;
