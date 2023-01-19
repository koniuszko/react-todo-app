import { useState } from "react";

import useWindowWidth from "../hooks/useWindowWidth";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

function TasksList({ taskCounter, tasks, setTasks, removeTask }) {
  const clickHandler = () => {
    console.log(tasks);
  };

  return (
    <section className="list">
      <ul className="tasks_list">
        {tasks.map(({ id, description }) => (
          <TaskItem
            key={Math.random()}
            number={id}
            description={description}
            removeTask={removeTask}
          />
        ))}
      </ul>
      <div className="summary">
        <p className="task_counter">{taskCounter.toString()} items left</p>
        {useWindowWidth() < 376 ? null : <Filters />}
        <button
          onClick={() => clickHandler()}
          className="clear_btn"
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
}

export default TasksList;
