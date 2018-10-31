import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = props => (
  <form onSubmit={props.onSubmit}>
    <Input
      onChange={props.onChange}
      type="text"
      placeholder="Add a todo"
      value={props.task}
      name={props.name}
    />
    <Button text="Add todo" />
  </form>
);

export default Form;
