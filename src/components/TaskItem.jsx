import "../style/TaskItem.scss";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";
import { useTodoStore } from "../contexts/TodoContext";

import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../store/ItemTypes";

function TaskItem({ id, description, active, index, moveCard }) {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.TASK,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const { markDone, markUndone, removeTask } = useTodoStore();
  return (
    <div
      className="list_item"
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <li className="task">
        <div className="task_container">
          <button
            onClick={(e) => markDone(e.target.id)}
            id={id}
            className={!active ? "gradient checkbox" : "checkbox"}
          >
            {!active ? (
              <UilCheck
                onClick={(e) => {
                  e.stopPropagation();
                  markUndone(e.target.id);
                }}
                id={id}
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
            id={id}
          />
        </button>
      </li>
      <span className="underline"></span>
    </div>
  );
}

export default TaskItem;
