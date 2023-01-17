import { useState } from "react";

import useWindowWidth from "../hooks/useWindowWidth";

import Filters from "./Filters";

import "../style/TasksList.scss";
import TaskItem from "./TaskItem";

function TasksList() {
  const taskCounter = 5;
  const [tasks, setTasks] = useState([
    { id: "0", description: "Lorem ipsum dolor sit amet" },
    { id: "1", description: "Lorem ipsum dolor sit amet" },
    { id: "2", description: "Lorem ipsum dolor sit amet" },
    { id: "3", description: "Lorem ipsum dolor sit amet" },
    { id: "4", description: "Lorem ipsum dolor sit amet" },
  ]);

  const removeTask = (id) => {
    console.log(id);
    let index = tasks.map((task) => task.id).indexOf(id);
    setTasks({
      tasks: tasks.splice(index, 1),
    });
    console.log(tasks);
  };

  // const renderTask = () => {};

  return (
    <section className="list">
      <ul className="tasks_list">
        {tasks.map(({ id, description }) => (
          <TaskItem
            key={id}
            number={id}
            description={description}
            removeTask={removeTask}
          />
        ))}
      </ul>
      <div className="summary">
        <p className="task_counter">{taskCounter.toString()} items left</p>
        {useWindowWidth() < 376 ? null : <Filters />}
        <button className="clear_btn">Clear Completed</button>
      </div>
    </section>
  );
}

export default TasksList;
