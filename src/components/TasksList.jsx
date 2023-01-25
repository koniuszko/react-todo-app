import useWindowWidth from "../hooks/useWindowWidth";
import { useTodoStore } from "../contexts/TodoContext";
import { observer } from "mobx-react-lite";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

const TasksList = observer(function TasksList() {
  const todoStore = useTodoStore();

  function showTasks() {
    const allTasks = todoStore.tasks.map(({ id, description, active }) => (
      <TaskItem
        key={Math.random()}
        id={id}
        description={description}
        active={active}
      />
    ));
    const activeTasks = todoStore.tasks.map(({ id, description, active }) =>
      active ? (
        <TaskItem
          key={Math.random()}
          id={id}
          description={description}
          active={active}
        />
      ) : null
    );
    const completedTasks = todoStore.tasks.map(({ id, description, active }) =>
      !active ? (
        <TaskItem
          key={Math.random()}
          id={id}
          description={description}
          active={active}
        />
      ) : null
    );
    switch (todoStore.filter) {
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
        <p className="task_counter">{todoStore.taskCounter()} items left</p>
        {useWindowWidth() < 376 ? null : <Filters filter={todoStore.filter} />}
        <button
          onClick={() => todoStore.clearTasks()}
          className="clear_btn"
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
});

export default TasksList;
