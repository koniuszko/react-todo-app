import "../style/Filters.scss";

function Filters({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        onClick={() => {
          setFilter("all");
        }}
        className={filter == "all" ? "active filter_button" : "filter_button"}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("active");
        }}
        className={
          filter == "active" ? "active filter_button" : "filter_button"
        }
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter("completed");
        }}
        className={
          filter == "completed" ? "active filter_button" : "filter_button"
        }
      >
        Completed
      </button>
    </div>
  );
}

export default Filters;
