import { useState } from "react";

import { ThemeContext } from "../contexts/theme-context";
import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
          <NewTask />
          <TasksList />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
