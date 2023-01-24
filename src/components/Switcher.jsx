import "../style/Switcher.scss";

import { useTodoStore } from "../contexts/TodoContext";

function Switcher() {
  const todoStore = useTodoStore();
  return (
    <button
      onClick={() => todoStore.themeChange()}
      className="switcher"
    ></button>
  );
}

export default Switcher;
