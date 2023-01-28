import useWindowWidth from "../hooks/useWindowWidth";

import { Droppable } from "react-beautiful-dnd";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

function TasksList({
  taskCounter,
  tasks,
  removeTask,
  clearTasks,
  markDone,
  markUndone,
  filter,
  setFilter,
}) {
  function showTasks() {
    const allTasks = tasks.map(({ id, description, active }, index) => (
      <TaskItem
        key={Math.random()}
        number={id}
        index={index}
        description={description}
        active={active}
        removeTask={removeTask}
        markDone={markDone}
        markUndone={markUndone}
      />
    ));
    const activeTasks = tasks.map(({ id, description, active }, index) =>
      active ? (
        <TaskItem
          key={Math.random()}
          number={id}
          index={index}
          description={description}
          active={active}
          removeTask={removeTask}
          markDone={markDone}
          markUndone={markUndone}
        />
      ) : null
    );
    const completedTasks = tasks.map(({ id, description, active }, index) =>
      !active ? (
        <TaskItem
          key={Math.random()}
          number={id}
          index={index}
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
      <Droppable droppableId="TodosList">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="tasks_list"
          >
            {showTasks()}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <div className="summary">
        <p className="task_counter">{taskCounter.toString()} items left</p>
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
