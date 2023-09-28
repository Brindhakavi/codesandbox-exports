import React, { useState } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  const [data, setData] = useState(["pencil", "Stick"]);
  const addTodo = () => {
    if (Todo) {
      data.push(Todo);
      console.log(data, "data");
      setData(data);
    }
  };
  const deleteTodo = (index) => {
    const updatedTodo = data.filter((i) => i !== index);
    setData(updatedTodo);
  };
  return (
    <div className="Todo">
      <h1>
        <center>To-do List</center>
      </h1>
      <table border="1">
        <input
          type="text"
          placeholder="Add a new Todo"
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button onClick={() => addTodo()}>Add</button>
        <ol className="task-list">
          {data.map((item, key) => (
            <li key={key}>
              {item}
              <button onClick={() => deleteTodo(item)}>Delete</button>
            </li>
          ))}
        </ol>
      </table>
    </div>
  );
}
