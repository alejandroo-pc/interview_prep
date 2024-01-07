import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  /*
1. create a simple todo app (using react state)
2. render a list of data from an array of objects, passed from props
3. find first non-repeating character in a string
4. return number of vouwels in a string
5. find two numbers from an array to add to a specific number
*/

  //  state for an array of words phrases as an array
  //  state for the input value
  //  function to handle the input value
  //  function to add the input value to the array of words
  //  function to delete a word from the array of words

  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);

  function handleInput(e) {
    e.preventDefault();
    setInputTask(e.target.value);
  }

  function handleAddTodo(todo) {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);
    setInputTask("");
  }

  function deleteTodo(id) {
    const newTodo = list.filter((todo) => todo.id !== id);
    setList(newTodo);
  }

  return (
    <main>
      <h1> Todo List</h1>
      <input
        value={inputTask}
        onChange={handleInput}
        placeholder="enter a task"
        type="text"
      ></input>
      <button onClick={() => handleAddTodo(inputTask)}> add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
