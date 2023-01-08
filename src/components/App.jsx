import { useState } from "react";

import { ThemeContext } from "../contexts/theme-context";
import "../style/App.css";

import Header from "./Header";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
