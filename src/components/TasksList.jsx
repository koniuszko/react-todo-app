import { Close } from "@mui/icons-material";

import Filters from "./Filters";

import "../style/TasksList.scss";

function TasksList() {
  const isMobile = true;
  const taskCounter = 5;
  return (
    <section className="list">
      <ul className="tasks_list">
        <li className="task">
          <div className="task_container">
            <div className="checkbox"></div>
            <p className="task_description">Lorem ipsum dolor sit amet</p>
          </div>

          <button className="task_done">
            <Close />
          </button>
        </li>
        <span className="underline"></span>
        <li className="task">
          <div className="task_container">
            <div className="checkbox"></div>
            <p className="task_description">Lorem ipsum dolor sit amet</p>
          </div>
          <button className="task_done">
            <Close />
          </button>
        </li>
        <span className="underline"></span>
        <li className="task">
          <div className="task_container">
            <div className="checkbox"></div>
            <p className="task_description">Lorem ipsum dolor sit amet</p>
          </div>
          <button className="task_done">
            <Close />
          </button>
        </li>
        <span className="underline"></span>
        <li className="task">
          <div className="task_container">
            <div className="checkbox"></div>
            <p className="task_description">Lorem ipsum dolor sit amet</p>
          </div>
          <button className="task_done">
            <Close />
          </button>
        </li>
        <span className="underline"></span>
        <li className="task">
          <div className="task_container">
            <div className="checkbox"></div>
            <p className="task_description">Lorem ipsum dolor sit amet</p>
          </div>
          <button className="task_done">
            <Close />
          </button>
        </li>
        <span className="underline"></span>
      </ul>
      <div className="summary">
        <p className="task_counter">{taskCounter.toString()} items left</p>
        {isMobile ? null : <Filters />}
        <button className="clear_btn">Clear Completed</button>
      </div>
    </section>
  );
}

export default TasksList;
