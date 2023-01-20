import useWindowWidth from "../hooks/useWindowWidth";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

function TasksList({ taskCounter, tasks, removeTask, filter }) {
  const clickHandler = () => {
    console.log(tasks.map(({ active }) => (active ? "ok" : "nie")));
  };

  // const showTask = () => {
  //   if (filter === "all") {
  //     tasks.map(({ id, description }) => (
  //       <TaskItem
  //         key={Math.random()}
  //         number={id}
  //         description={description}
  //         removeTask={removeTask}
  //       />
  //     ));
  //   } else if (filter === "active") {
  //     tasks.map(({ id, description, active }) =>
  //       active ? (
  //         <TaskItem
  //           key={Math.random()}
  //           number={id}
  //           description={description}
  //           removeTask={removeTask}
  //         />
  //       ) : null
  //     );
  //   } else if (filter === "completed") {
  //     tasks.map(({ id, description, active }) =>
  //       !active ? (
  //         <TaskItem
  //           key={Math.random()}
  //           number={id}
  //           description={description}
  //           removeTask={removeTask}
  //         />
  //       ) : null
  //     );
  //   }
  // };

  function showTasks() {
    const allTasks = tasks.map(({ id, description }) => (
      <TaskItem
        key={Math.random()}
        number={id}
        description={description}
        removeTask={removeTask}
      />
    ));
    const activeTasks = tasks.map(({ id, description, active }) =>
      active ? (
        <TaskItem
          key={Math.random()}
          number={id}
          description={description}
          removeTask={removeTask}
        />
      ) : null
    );
    const completedTasks = tasks.map(({ id, description, active }) =>
      !active ? (
        <TaskItem
          key={Math.random()}
          number={id}
          description={description}
          removeTask={removeTask}
        />
      ) : null
    );
    switch (filter) {
      case "all":
        return allTasks;
      case "active":
        return activeTasks;
      case "completed":
        return completedTasks;
      default:
        return allTasks;
    }
  }

  return (
    <section className="list">
      <ul className="tasks_list">{showTasks()}</ul>
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
