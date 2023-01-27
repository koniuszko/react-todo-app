import useWindowWidth from "../hooks/useWindowWidth";
import { useTodoStore } from "../contexts/TodoContext";
import { observer } from "mobx-react-lite";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import Filters from "./Filters";

const App = observer(function App() {
  const { theme, filter } = useTodoStore();

  return (
    <div className={`theme-${theme}`}>
      <div className="App">
        <Header />
        <NewTask />
        <DndProvider backend={HTML5Backend}>
          <TasksList />
        </DndProvider>
        {useWindowWidth() < 376 ? <Filters filter={filter} /> : null}
        <p className="text">Drag and drop to reorder list</p>
      </div>
    </div>
  );
});

export default App;
