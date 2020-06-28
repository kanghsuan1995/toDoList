import React, { useState } from "react";

function App() {
  let [inputNote, setInputNote] = useState("");
  let [totalNotes, setTotalNotes] = useState([]);
  function inputUpdate(event) {
    let inputValue = event.target.value;
    setInputNote(inputValue);
  }

  function addItem() {
    setTotalNotes(prevNote => {
      return [...prevNote, inputNote];
    });
    setInputNote("");
  }

  function removeItem(i) {
    const newList = totalNotes.filter(item => totalNotes.indexOf(item) !== i);
    setTotalNotes(newList);
  }

  function completeItem(i) {
    const note = document.getElementsByClassName("listItem");
    note[i].style.textDecoration = "line-through";
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputUpdate} type="text" value={inputNote} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {totalNotes.map((notes, index) => (
            <li key={index} className="listItem">
              {notes}

              <button className="cancel" onClick={() => removeItem(index)}>
                x
              </button>
              {/* <button
                className="complete"
                id="completeId"
                onClick={() => completeItem(index)}
              >
                V{" "}
              </button> */}
            </li>
          ))}
        </ul>
      </div>
      <footer />
    </div>
  );
}

export default App;
