import { useState } from "react";

import { ThemeContext } from "../contexts/theme-context";
import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import Filters from "./Filters";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
          <NewTask />
          <TasksList />
          <Filters />
          <p className="text">Drag and drop to reorder list</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
