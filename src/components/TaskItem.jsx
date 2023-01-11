import { Close } from "@mui/icons-material";
import "../style/TaskItem.scss";

function TaskItem({ number, description, removeTask }) {
  return (
    <>
      <li className="task">
        <div className="task_container">
          <div className="checkbox"></div>
          <p className="task_description">{description}</p>
        </div>
        <button
          taskNumber={number}
          onClick={(e) => console.log(e.target)}
          className="task_done"
        >
          <Close />
        </button>
      </li>
      <span className="underline"></span>
    </>
  );
}

export default TaskItem;
