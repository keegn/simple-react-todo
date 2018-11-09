import React from "react";
import Button from "./Button";
import Input from "./Input";
import { StyledForm } from "./global-styles/GlobalStyles";

const Form = props => (
  <StyledForm onSubmit={props.onSubmit}>
    <Input
      onChange={props.onChange}
      type="text"
      placeholder="Add a task"
      value={props.task}
      name={props.name}
      autocomplete="off"
    />
    <Button text="Add todo" />
    <Button handleDelete={props.handleDelete} text="Clear completed" />
  </StyledForm>
);

export default Form;
