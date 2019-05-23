import React, { useState } from 'react';

export default function TodoHooks() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleClick = () => {
    if (newTodoText !== '') {
      setTodos([...todos, newTodoText]);
      setNewTodoText('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List Hooks</h1>
      <input
        type="text"
        placeholder="New todo item"
        value={newTodoText}
        onChange={event => setNewTodoText(event.currentTarget.value)}
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
