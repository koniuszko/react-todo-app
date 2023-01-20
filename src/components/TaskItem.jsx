import "../style/TaskItem.scss";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";

function TaskItem({
  number,
  description,
  active,
  removeTask,
  markDone,
  markUndone,
}) {
  return (
    <>
      <li className="task">
        <div className="task_container">
          <button
            onClick={(e) => markDone(e.target.id)}
            id={number}
            className={!active ? "gradient checkbox" : "checkbox"}
          >
            {!active ? (
              <UilCheck
                onClick={(e) => {
                  e.stopPropagation();
                  markUndone(e.target.id);
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
            onClick={(e) => removeTask(e.target.id)}
            id={number}
          />
        </button>
      </li>
      <span className="underline"></span>
    </>
  );
}

export default TaskItem;
