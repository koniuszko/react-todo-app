import useWindowWidth from "../hooks/useWindowWidth";
import { useTodoStore } from "../contexts/TodoContext";
import { observer } from "mobx-react-lite";

import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import Filters from "./Filters";

const App = observer(function App() {
  const todoStore = useTodoStore();

  return (
    <div className={`theme-${todoStore.theme}`}>
      <div className="App">
        <Header />
        <NewTask />
        <TasksList />
        {useWindowWidth() < 376 ? <Filters filter={todoStore.filter} /> : null}
        <p className="text">Drag and drop to reorder list</p>
      </div>
    </div>
  );
});

export default App;
