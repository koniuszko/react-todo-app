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
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    {
      id: 0,
      description: "Complete online JavaScript course",
      active: false,
    },
    {
      id: 1,
      description: "Jog around the park 3x",
      active: true,
    },
    {
      id: 2,
      description: "10 minutes meditation",
      active: true,
    },
    {
      id: 3,
      description: "Read for 1 hour",
      active: true,
    },
    {
      id: 4,
      description: "Pick up groceries",
      active: true,
    },
    {
      id: 5,
      description: "Complete Todo App on Frontend Mentor",
      active: true,
    },
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

  const clearTasks = () => {
    const clearedTasks = tasks.filter((task) => task.active);
    setTasks([...clearedTasks]);
  };

  const markDone = (id) => {
    let index = tasks.findIndex((task) => task.id == id);
    tasks[index].active = false;
    setTasks([...tasks]);
  };

  const markUndone = (id) => {
    let index = tasks.findIndex((task) => task.id == id);
    tasks[index].active = true;
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
            clearTasks={clearTasks}
            filter={filter}
            setFilter={setFilter}
            markDone={markDone}
            markUndone={markUndone}
          />
          {useWindowWidth() < 376 ? (
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
          ) : null}
          <p className="text">Drag and drop to reorder list</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
