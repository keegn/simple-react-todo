import React from "react";
import styled from "styled-components";

const ToggleItemStyle = styled.div(props => ({
  textDecoration: props.textDecoration
}));

const TodoItem = props => (
  <ToggleItemStyle
    textDecoration={props.data.completed ? "line-through" : null}
    onClick={() => props.handleCompleted(props.data.id)}
  >
    {props.data.task}
  </ToggleItemStyle>
);
export default TodoItem;
