import React, { Component } from 'react';

export default class TodoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ newTodoText: event.currentTarget.value });
  }

  handleClick() {
    const { todos, newTodoText } = this.state;
    if (newTodoText !== '') {
      this.setState({ todos: [...todos, newTodoText], newTodoText: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List Class</h1>
        <input
          type="text"
          placeholder="New todo item"
          value={this.state.newTodoText}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
