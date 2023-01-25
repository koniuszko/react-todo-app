import { useState } from "react";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { useTodoStore } from "../contexts/TodoContext";
import { nanoid } from "nanoid";

import "../style/NewTask.scss";

function NewTask() {
  const todoStore = useTodoStore();
  const [taskName, setTaskName] = useState("");

  function valueChange(e) {
    setTaskName(e.target.value);
  }

  function newTask() {
    const newTaskItem = {
      id: nanoid(),
      description: taskName,
      active: true,
    };
    if (taskName.length > 0) {
      todoStore.addTask(newTaskItem);
      setTaskName("");
    }
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
      <button className="add_button">
        <UilPlusCircle
          className="add_item"
          onClick={clickHandler}
        />
      </button>

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
