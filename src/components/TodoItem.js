import React from 'react';
import styled from 'styled-components';

const ToggleItemStyle = styled.div(props => ({
  padding: '10px',
  color: props.color
}));

const TodoItem = props => (
  <ToggleItemStyle
    color={props.data.completed ? '#F07178' : 'white'}
    onClick={() => props.handleCompleted(props.data.id)}>
    {props.data.task}
  </ToggleItemStyle>
);
export default TodoItem;
