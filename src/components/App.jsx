import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoListItem from "./ToDoListItem";

function App() {
  const [items, setItem] = useState([]);

  function addedList(inputValue) {
    setItem((prev) => [...prev, inputValue]);
  }

  function deleteItem(mykey) {
    setItem((prev) => items.filter((item, ind) => ind !== mykey));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addedList} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoListItem
              key={index}
              mykey={index}
              item={item}
              checked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
