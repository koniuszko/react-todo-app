import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

import { nanoid } from "nanoid";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

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
      id: nanoid(),
      description: "Complete online JavaScript course",
      active: false,
    },
    {
      id: nanoid(),
      description: "Jog around the park 3x",
      active: true,
    },
    {
      id: nanoid(),
      description: "10 minutes meditation",
      active: true,
    },
    {
      id: nanoid(),
      description: "Read for 1 hour",
      active: true,
    },
    {
      id: nanoid(),
      description: "Pick up groceries",
      active: true,
    },
    {
      id: nanoid(),
      description: "Complete Todo App on Frontend Mentor",
      active: true,
    },
  ]);
  const taskCounter = tasks.length;

  const addTask = (newTaskItem) => {
    tasks.push(newTaskItem);
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
          <DndProvider
            backend={useWindowWidth() < 420 ? TouchBackend : HTML5Backend}
          >
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
          </DndProvider>
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
