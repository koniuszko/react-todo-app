import { observer } from "mobx-react-lite";
import { useTodoStore } from "../contexts/TodoContext";

import "../style/Filters.scss";

const Filters = observer(function Filters() {
  const { filter, filterChange } = useTodoStore();

  return (
    <div className="filters">
      <button
        id="all"
        onClick={(e) => filterChange(e.target.id)}
        className={filter == "all" ? "active filter_button" : "filter_button"}
      >
        All
      </button>
      <button
        id="active"
        onClick={(e) => filterChange(e.target.id)}
        className={
          filter == "active" ? "active filter_button" : "filter_button"
        }
      >
        Active
      </button>
      <button
        id="completed"
        onClick={(e) => filterChange(e.target.id)}
        className={
          filter == "completed" ? "active filter_button" : "filter_button"
        }
      >
        Completed
      </button>
    </div>
  );
});

export default Filters;
