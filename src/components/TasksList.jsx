import { Close } from "@mui/icons-material";

import "../style/TasksList.scss";

function TasksList() {
  return (
    <ul className="tasks_list">
      <li className="task">
        <div className="checkbox"></div>
        <p className="task_description">Lorem ipsum dolor sit amet</p>
        <button className="task_done">
          <Close />
        </button>
      </li>
      <span className="underline"></span>
      <li className="task">
        <div className="checkbox"></div>
        <p className="task_description">Lorem ipsum dolor sit amet</p>
        <button className="task_done">
          <Close />
        </button>
      </li>
      <span className="underline"></span>
      <li className="task">
        <div className="checkbox"></div>
        <p className="task_description">Lorem ipsum dolor sit amet</p>
        <button className="task_done">
          <Close />
        </button>
      </li>
      <span className="underline"></span>
      <li className="task">
        <div className="checkbox"></div>
        <p className="task_description">Lorem ipsum dolor sit amet</p>
        <button className="task_done">
          <Close />
        </button>
      </li>
      <span className="underline"></span>
      <li className="task">
        <div className="checkbox"></div>
        <p className="task_description">Lorem ipsum dolor sit amet</p>
        <button className="task_done">
          <Close />
        </button>
      </li>
      <span className="underline"></span>
    </ul>
  );
}

export default TasksList;
