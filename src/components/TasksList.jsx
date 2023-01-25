import useWindowWidth from "../hooks/useWindowWidth";
import { useTodoStore } from "../contexts/TodoContext";
import { observer } from "mobx-react-lite";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

const TasksList = observer(function TasksList() {
  const { tasks, taskCounter, clearTasks, filter } = useTodoStore();

  function showTasks() {
    const allTasks = tasks.map(({ id, description, active }) => (
      <TaskItem
        key={Math.random()}
        id={id}
        description={description}
        active={active}
      />
    ));
    const activeTasks = tasks.map(({ id, description, active }) =>
      active ? (
        <TaskItem
          key={Math.random()}
          id={id}
          description={description}
          active={active}
        />
      ) : null
    );
    const completedTasks = tasks.map(({ id, description, active }) =>
      !active ? (
        <TaskItem
          key={Math.random()}
          id={id}
          description={description}
          active={active}
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
        <p className="task_counter">{taskCounter()} items left</p>
        {useWindowWidth() < 376 ? null : <Filters filter={filter} />}
        <button
          onClick={() => clearTasks()}
          className="clear_btn"
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
});

export default TasksList;
