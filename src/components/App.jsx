import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

import { ThemeContext } from "../contexts/theme-context";
import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import Filters from "./Filters";

function App() {
  const [theme, setTheme] = useState("dark");

  const [tasks, setTasks] = useState([
    { id: 0, description: "Lorem ipsum dolor sit amet" },
    { id: 1, description: "Lorem ipsum dolor sit amet" },
    { id: 2, description: "Lorem ipsum dolor sit amet" },
    { id: 3, description: "Lorem ipsum dolor sit amet" },
    { id: 4, description: "Lorem ipsum dolor sit amet" },
    { id: 5, description: "Lorem ipsum dolor sit amet" },
  ]);
  const taskCounter = tasks.length;

  const addTask = (newTaskItem) => {
    tasks.unshift(newTaskItem);
    setTasks([...tasks]);
  };

  const removeTask = (id) => {
    let index = tasks.findIndex((task) => task.id == id);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
          <NewTask
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
          />
          <TasksList
            taskCounter={taskCounter}
            tasks={tasks}
            setTasks={setTasks}
            removeTask={removeTask}
          />
          {useWindowWidth() < 376 ? <Filters /> : null}
          <p className="text">Drag and drop to reorder list</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
