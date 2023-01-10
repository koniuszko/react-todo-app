import "../style/Switcher.scss";

import { ThemeContext } from "../contexts/theme-context";

function Switcher() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="switcher"
        ></button>
      )}
    </ThemeContext.Consumer>
  );
}

export default Switcher;
