import { useState } from "react";

import Filters from "./Filters";

import "../style/TasksList.scss";
import TaskItem from "./TaskItem";

function TasksList() {
  const isMobile = true;
  const taskCounter = 5;
  const [tasks, setTasks] = useState([
    { id: 0, number: 0, description: "Lorem ipsum dolor sit amet" },
    { id: 1, number: 1, description: "Lorem ipsum dolor sit amet" },
    { id: 2, number: 2, description: "Lorem ipsum dolor sit amet" },
    { id: 3, number: 3, description: "Lorem ipsum dolor sit amet" },
    { id: 4, number: 4, description: "Lorem ipsum dolor sit amet" },
  ]);

  const removeTask = (id) => {
    let index = tasks.indexOf(id === tasks.id);
    setTasks({
      tasks: tasks.splice(index, 1),
    });
  };

  const renderTask = tasks.map(({ id, number, description }) => (
    <TaskItem
      key={id}
      number={number}
      description={description}
      removeTask={removeTask}
    />
  ));

  return (
    <section className="list">
      <ul className="tasks_list">{renderTask}</ul>
      <div className="summary">
        <p className="task_counter">{taskCounter.toString()} items left</p>
        {isMobile ? null : <Filters />}
        <button className="clear_btn">Clear Completed</button>
      </div>
    </section>
  );
}

export default TasksList;
