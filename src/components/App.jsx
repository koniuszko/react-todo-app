import { useState, useEffect } from "react";

import { ThemeContext } from "../contexts/theme-context";
import "../style/App.scss";

import Header from "./Header";
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import Filters from "./Filters";

function App() {
  const [theme, setTheme] = useState("dark");
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = () => (width < 500 ? true : false);

  useEffect(() => {
    function handleResize() {
      setWidth({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
          <NewTask />
          <TasksList />
          {isMobile ? <Filters /> : null}
          <p className="text">Drag and drop to reorder list</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
