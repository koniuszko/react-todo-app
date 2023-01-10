import "../style/Filters.scss";

function Filters() {
  return (
    <div className="filters">
      <button className="active filter_button">All</button>
      <button className="filter_button">Active</button>
      <button className="filter_button">Completed</button>
    </div>
  );
}

export default Filters;
