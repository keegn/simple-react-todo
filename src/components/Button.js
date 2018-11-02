import React from "react";

const Button = props => (
  <button onClick={props.handleDelete}>{props.text}</button>
);

export default Button;
