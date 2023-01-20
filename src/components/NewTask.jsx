import { useState } from "react";
import { UilPlus } from "@iconscout/react-unicons";

import "../style/NewTask.scss";

function NewTask({ addTask }) {
  const [taskName, setTaskName] = useState("");

  function valueChange(e) {
    setTaskName(e.target.value);
  }

  function newTask() {
    const newTaskItem = {
      id: (Math.random() * 100000).toFixed() * 1,
      description: taskName,
      active: true,
    };
    addTask(newTaskItem);
    setTaskName("");
  }

  function keyDownHandler(event) {
    if (event.key === "Enter") {
      newTask();
    }
  }
  function clickHandler() {
    newTask();
  }

  return (
    <div className="new_task">
      <div className="checkbox">
        <button className="add_button">
          <UilPlus
            className="add_item"
            onClick={clickHandler}
          />
        </button>
      </div>
      <label>
        <input
          className="task_field"
          type="text"
          placeholder="Create a new todo..."
          value={taskName}
          onChange={(e) => valueChange(e)}
          onKeyDown={keyDownHandler}
        />
      </label>
    </div>
  );
}

export default NewTask;
