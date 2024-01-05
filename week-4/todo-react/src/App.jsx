import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Go for a run",
      description: "A task to stay active",
    },
    { id: "todo2", title: "Read a book", description: "Dive into a new world" },
    {
      id: "todo3",
      title: "Learn a new skill",
      description: "Expand your knowledge",
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={titleChangeHandler}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={descriptionChangeHandler}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          // Create a new array by spreading the existing todos
          const newTodos = [
            ...todos,
            { id: Math.random(), title, description },
          ];
          // Update the state with the new array
          setTodos(newTodos);
        }}
      >
        Add todo
      </button>
      <br></br>
      <br></br>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <br></br>
            <br></br>
          </div>
        );
      })}
    </>
  );
}

export default App;
