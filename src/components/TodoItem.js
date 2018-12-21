import React from 'react';
import styled from 'styled-components';

const ToggleCompletedStyle = styled.div`
  padding: 10px;
  color: ${props => props.color || 'white'};
  cursor: pointer;
`;
const TodoItem = props => (
  <ToggleCompletedStyle
    color={props.data.completed && '#F07178'}
    onClick={() => props.handleCompleted(props.data.id)}>
    {props.data.task}
  </ToggleCompletedStyle>
);
export default TodoItem;
