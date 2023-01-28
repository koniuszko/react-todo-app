import update from "immutability-helper";
import { useCallback } from "react";

import useWindowWidth from "../hooks/useWindowWidth";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

function TasksList({
  taskCounter,
  tasks,
  setTasks,
  removeTask,
  clearTasks,
  markDone,
  markUndone,
  filter,
  setFilter,
}) {
  function showTasks() {
    const allTasks = tasks.map((task, i) => renderTask(task, i));
    const activeTasks = tasks.map((task, i) =>
      task.active ? renderTask(task, i) : null
    );
    const completedTasks = tasks.map((task, i) =>
      !task.active ? renderTask(task, i) : null
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

  const moveTask = useCallback((dragIndex, hoverIndex) => {
    setTasks((prevTasks) =>
      update(prevTasks, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTasks[dragIndex]],
        ],
      })
    );
  }, []);

  const renderTask = useCallback((task, index) => {
    return (
      <TaskItem
        key={task.id}
        index={index}
        id={task.id}
        active={task.active}
        description={task.description}
        moveTask={moveTask}
        removeTask={removeTask}
        markDone={markDone}
        markUndone={markUndone}
      />
    );
  }, []);

  return (
    <section className="list">
      <ul className="tasks_list">{showTasks()}</ul>
      <div className="summary">
        <p className="task_counter">{taskCounter()} items left</p>
        {useWindowWidth() < 376 ? null : (
          <Filters
            filter={filter}
            setFilter={setFilter}
          />
        )}
        <button
          onClick={() => clearTasks()}
          className="clear_btn"
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
}

export default TasksList;
