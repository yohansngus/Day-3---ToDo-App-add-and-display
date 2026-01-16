import { useState } from "react";
import "./App.css";

function App() {
  const [inputtask, setInputtask] = useState("");
  const [tassk, setTassk] = useState();
  const newInput = (e) => {
    setInputtask(e.target.value);
  };
  const newTask = () => {
    setTassk(inputtask);
    setInputtask("");
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
            <button onClick={newTask}>Add Task</button>
          </div>
          <div className="displaycontainer">
            <div className="diplaytitle">
              <div className="hash">#</div>
              <div className="task">Task</div>
              <div className="status">Status</div>
              <div className="action">Action</div>
            </div>
            <div className="displaytodo">
              <div className="hash">1</div>
              <div className="task">10:30am Appointment with Mercy</div>
              <div className="status">Done</div>
              <div className="action">
                <div className="close">
                  {" "}
                  <span className="material-symbols-outlined">close</span>
                </div>
              </div>
            </div>
            <div className="displaytodo">
              <div className="hash">2</div>
              <div className="task">9:00am Adha Fixing Dish</div>
              <div className="status">Done </div>
              <div className="action">
                <div className="close">
                  {" "}
                  <span className="material-symbols-outlined">close</span>
                </div>
              </div>
            </div>
            <div className="displaytodo">
              <div className="hash">3</div>
              <div className="task">01:00pm going to Church</div>
              <div className="status">Pendding</div>
              <div className="action">
                <div className="done">
                  {" "}
                  <span className="material-symbols-outlined">
                    done_outline
                  </span>
                </div>
                <div className="close">
                  <span className="material-symbols-outlined">close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
