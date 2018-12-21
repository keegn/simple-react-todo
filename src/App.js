import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import EmptyListState from './components/EmptyListState';
import { GlobalStyle } from './components/global-styles/GlobalStyles';
// for later: yarn add react-spring --> see https://github.com/drcmda/react-spring

import { AppContainer } from './components/global-styles/GlobalStyles';

class App extends React.Component {
  state = {
    todos: [],
    task: ''
  };

  handleInput = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      if (this.state.task !== '') {
        return {
          todos: prevState.todos.concat({
            task: this.state.task,
            id: Date.now(),
            completed: false
          }),
          task: ''
        };
      }
    });
  };

  // map through the todos and if the id matches the id passed in, flip the completed flag
  handleCompleted = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo =>
          todo.id === id ? (todo.completed = !todo.completed && todo) : todo
        )
      };
    });
  };

  handleDelete = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => !todo.completed && todo)
      };
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Header headingText="React Todo" />
          {this.state.todos.length === 0 ? (
            <EmptyListState />
          ) : (
            <TodoList
              todos={this.state.todos}
              handleCompleted={this.handleCompleted}
            />
          )}
          <Form
            task={this.state.task}
            name="task"
            onChange={this.handleInput}
            onSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
          />
        </AppContainer>
      </>
    );
  }
}

export default App;
