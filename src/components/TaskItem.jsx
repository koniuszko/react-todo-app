import "../style/TaskItem.scss";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";
import { useTodoStore } from "../contexts/TodoContext";

function TaskItem({ number, description, active }) {
  const todoStore = useTodoStore();
  return (
    <>
      <li className="task">
        <div className="task_container">
          <button
            onClick={(e) => todoStore.markDone(e.target.id)}
            id={number}
            className={!active ? "gradient checkbox" : "checkbox"}
          >
            {!active ? (
              <UilCheck
                onClick={(e) => {
                  e.stopPropagation();
                  todoStore.markUndone(e.target.id);
                }}
                id={number}
                className="icon"
              />
            ) : null}
          </button>

          <p
            className={
              !active ? "grey_text task_description" : "task_description"
            }
          >
            {description}
          </p>
        </div>
        <button className="task_icon">
          <UilTimes
            onClick={(e) => todoStore.removeTask(e.target.id)}
            id={number}
          />
        </button>
      </li>
      <span className="underline"></span>
    </>
  );
}

export default TaskItem;
