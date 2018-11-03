import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { AppContainer } from "./components/global-styles/GlobalStyles";

class App extends React.Component {
  state = {
    todos: [{ task: "Clean basement", id: Date.now(), completed: false }],
    task: ""
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat({
          task: this.state.task,
          id: Date.now(),
          completed: false
        }),
        task: ""
      };
    });
  };

  // map through the todos and if the id matches the id passed in, flip the completed flag
  handleCompleted = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id == id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        })
      };
    });
  };

  handleDelete = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return !todo.completed ? todo : null;
        })
      };
    });
  };

  render() {
    return (
      <AppContainer>
        <Header headingText="React Todo" />
        <TodoList
          todos={this.state.todos}
          handleCompleted={this.handleCompleted}
        />
        <Form
          task={this.state.task}
          name="task"
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </AppContainer>
    );
  }
}

export default App;
