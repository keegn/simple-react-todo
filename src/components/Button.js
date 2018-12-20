import React from 'react';
import { StyledButton } from './global-styles/GlobalStyles';

const Button = props => (
  <StyledButton onClick={props.handleDelete}>{props.text}</StyledButton>
);

export default Button;
