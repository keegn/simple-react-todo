import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./styles.css";

class App extends React.Component {
  state = {
    todos: [],
    task: ""
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(this.state.task),
        task: ""
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header headingText="React Todo" />
        <TodoList todos={this.state.todos} />
        <Form
          task={this.state.task}
          name="task"
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
