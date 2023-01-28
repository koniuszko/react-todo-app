import "../style/TaskItem.scss";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";
import { useTodoStore } from "../contexts/TodoContext";

import { Draggable } from "react-beautiful-dnd";

function TaskItem({ id, description, active, index }) {
  const { markDone, markUndone, removeTask } = useTodoStore();
  return (
    <Draggable
      draggableId={id}
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
                onClick={(e) => {
                  active ? markDone(e.target.id) : markUndone(e.target.id);
                }}
                id={id}
                className={!active ? "gradient checkbox" : "checkbox"}
              >
                <UilCheck
                  onClick={(e) => e.stopPropagation()}
                  className={active ? "disabled icon" : "icon"}
                />
              </button>
              <p
                className={
                  !active ? "grey_text task_description" : "task_description"
                }
              >
                {description}
              </p>
            </div>
            <button
              onClick={(e) => removeTask(e.target.id)}
              id={id}
              className="task_icon"
            >
              <UilTimes className="icon" />
            </button>
          </li>
          <span className="underline"></span>
        </div>
      )}
    </Draggable>
  );
}

export default TaskItem;
