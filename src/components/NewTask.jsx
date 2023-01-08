import "../style/NewTask.scss";

function NewTask() {
  return (
    <div className="new_task">
      <div className="checkbox"></div>
      <label>
        <input
          className="task_field"
          type="text"
          placeholder="Create a new todo..."
        />
      </label>
    </div>
  );
}

export default NewTask;
