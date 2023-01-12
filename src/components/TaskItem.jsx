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
          onClick={(e) => console.log(e.target)}
          taskNumber={number}
          className="task_done"
        >
          X
        </button>
      </li>
      <span className="underline"></span>
    </>
  );
}

export default TaskItem;
