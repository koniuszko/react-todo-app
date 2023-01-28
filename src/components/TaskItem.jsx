import "../style/TaskItem.scss";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";

import { Draggable } from "react-beautiful-dnd";

function TaskItem({
  number,
  index,
  description,
  active,
  removeTask,
  markDone,
  markUndone,
}) {
  return (
    <Draggable
      draggableId={number.toString()}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          className={`list_item ${snapshot.isDragging ? "drag" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
        </div>
      )}
    </Draggable>
  );
}

export default TaskItem;
