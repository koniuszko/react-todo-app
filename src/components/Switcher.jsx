import "../style/Switcher.scss";

import { useTodoStore } from "../contexts/TodoContext";

function Switcher() {
  const { themeChange } = useTodoStore();
  return (
    <button
      onClick={() => themeChange()}
      className="switcher"
    ></button>
  );
}

export default Switcher;
