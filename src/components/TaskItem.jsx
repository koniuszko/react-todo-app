import "../style/TaskItem.scss";
import { UilTimes } from "@iconscout/react-unicons";

function TaskItem({ number, description, removeTask }) {
  return (
    <>
      <li className="task">
        <div className="task_container">
          <div className="checkbox"></div>
          <p className="task_description">{description}</p>
        </div>
        <button className="task_done">
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
