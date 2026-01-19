import { useState } from "react";
import "./App.css";

function App() {
  const [inputtask, setInputtask] = useState("");
  const [tassk, setTassk] = useState([]);

  const newInput = (e) => {
    setInputtask(e.target.value);
  };
  const newTask = () => {
    if (inputtask.trim() === "") return;
    setTassk([...tassk, inputtask]);
    setInputtask("");
  };
  const delEle = (id) => {
    setTassk((prev) => prev.filter((_, i) => i !== prev.length - 1 - id));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="nav">ToDo App</div>
        <div className="content">
          <div className="addtodo">
            <input
              value={inputtask}
              onChange={newInput}
              placeholder="Write your tasks here..."
            />
            <button className="newtas" onClick={newTask}>
              Add Task
            </button>
          </div>
          <div className="displaycontainer">
            <div className="diplaytitle">
              <div className="hash">#</div>
              <div className="task">Task</div>
              <div className="status">Status</div>
              <div className="action">Action</div>
            </div>
            <ul>
              {tassk.toReversed().map((task, id) => (
                <li className="displaytodo" key={id}>
                  <div className="hash">{id + 1}.</div>
                  <div className="task">{task}</div>
                  <div className="status">pendding</div>
                  <div className="action">
                    <div className="done">
                      {" "}
                      <span className="material-symbols-outlined">done</span>
                    </div>
                    <div className="close" onClick={() => delEle(id)}>
                      {" "}
                      <span className="material-symbols-outlined">close</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
