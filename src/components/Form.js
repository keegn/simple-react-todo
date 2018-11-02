import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = props => (
  <form onSubmit={props.onSubmit}>
    <Input
      onChange={props.onChange}
      type="text"
      placeholder="Add a task"
      value={props.task}
      name={props.name}
    />
    <Button text="Add todo" />
    <Button handleDelete={props.handleDelete} text="Clear completed" />
  </form>
);

export default Form;
