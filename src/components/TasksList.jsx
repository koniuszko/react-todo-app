import useWindowWidth from "../hooks/useWindowWidth";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

function TasksList({
  taskCounter,
  tasks,
  removeTask,
  markDone,
  markUndone,
  filter,
  setFilter,
}) {
  const clickHandler = () => {
    console.log("ok");
  };

  function showTasks() {
    const allTasks = tasks.map(({ id, description, active }) => (
      <TaskItem
        key={Math.random()}
        number={id}
        description={description}
        active={active}
        removeTask={removeTask}
        markDone={markDone}
        markUndone={markUndone}
      />
    ));
    const activeTasks = tasks.map(({ id, description, active }) =>
      active ? (
        <TaskItem
          key={Math.random()}
          number={id}
          description={description}
          active={active}
          removeTask={removeTask}
          markDone={markDone}
          markUndone={markUndone}
        />
      ) : null
    );
    const completedTasks = tasks.map(({ id, description, active }) =>
      !active ? (
        <TaskItem
          key={Math.random()}
          number={id}
          description={description}
          active={active}
          removeTask={removeTask}
          markDone={markDone}
          markUndone={markUndone}
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
        {useWindowWidth() < 376 ? null : (
          <Filters
            filter={filter}
            setFilter={setFilter}
          />
        )}
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
