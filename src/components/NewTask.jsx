import { useState } from "react";

import "../style/NewTask.scss";

function NewTask({ tasks, setTasks, addTask }) {
  const [taskName, setTaskName] = useState("");

  function valueChange(e) {
    setTaskName(e.target.value);
  }

  function newTask(event) {
    if (event.key === "Enter") {
      const newTaskItem = {
        id: (Math.random() * 100000).toFixed() * 1,
        description: taskName,
      };
      console.log(newTaskItem);
      addTask(newTaskItem);
      setTaskName("");
    }
  }

  return (
    <div className="new_task">
      <div className="checkbox"></div>
      <label>
        <input
          className="task_field"
          type="text"
          placeholder="Create a new todo..."
          value={taskName}
          onChange={(e) => valueChange(e)}
          onKeyDown={newTask}
        />
      </label>
    </div>
  );
}

export default NewTask;
