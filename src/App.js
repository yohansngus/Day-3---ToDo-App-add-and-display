import { useState } from "react";
import "./App.css";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [popup, setPopup] = useState("");
  const newInput = (e) => {
    setInputTask(e.target.value);
  };
  const newTask = (e) => {
    e.preventDefault();
    if (inputTask.trim() === "") return setPopup("Todo cannot be empty!");
    if (inputTask.length > 25) return setPopup("Todo is too long!");
    setTasks([...tasks, inputTask]);
    setInputTask("");
    setPopup("");
  };

  const delEle = (id) => {
    setTasks((prev) => prev.filter((_, i) => i !== prev.length - 1 - id));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="nav">ToDo App</div>
        <div className="content">
          <form className="addtodo" onSubmit={newTask}>
            <div className="popup">{popup}</div>
            <input
              value={inputTask}
              onChange={newInput}
              placeholder="Write your tasks here..."
            />
            <button className="newtas" type="submit">
              Add Task
            </button>
          </form>

          <div className="displaycontainer">
            {tasks.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <h2>You don’t have any tasks yet!</h2>
                <p>Click "Add Task" to create your first todo.</p>
              </div>
            ) : (
              <>
                <div className="diplaytitle">
                  <div className="hash">#</div>
                  <div className="task">Task</div>
                  <div className="status">Status</div>
                  <div className="action">Action</div>
                </div>
                <ul>
                  {tasks.toReversed().map((task, id) => (
                    <li className="displaytodo" key={id}>
                      <div className="hash">{id + 1}.</div>
                      <div className="task">{task}</div>
                      <div className="status">pendding</div>
                      <div className="action">
                        <div className="done">
                          {" "}
                          <span className="material-symbols-outlined">
                            done
                          </span>
                        </div>
                        <div className="close" onClick={() => delEle(id)}>
                          {" "}
                          <span className="material-symbols-outlined">
                            close
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
