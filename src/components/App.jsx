import useWindowWidth from "../hooks/useWindowWidth";
import { useTodoStore } from "../contexts/TodoContext";
import { observer } from "mobx-react-lite";

import { DragDropContext } from "react-beautiful-dnd";
import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import Filters from "./Filters";

const App = observer(function App() {
  const { theme, filter, tasks, updateTasks } = useTodoStore();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let move,
      currentTasks = tasks;

    if (source.droppableId === "TodosList") {
      move = tasks[source.index];
      currentTasks.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      currentTasks.splice(destination.index, 0, move);
    }

    updateTasks(currentTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
          <NewTask />
          <TasksList />
          {useWindowWidth() < 420 ? <Filters filter={filter} /> : null}
          <p className="text">Drag and drop to reorder list</p>
        </div>
      </div>
    </DragDropContext>
  );
});

export default App;
