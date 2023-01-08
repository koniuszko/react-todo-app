import Switcher from "./Switcher";

import "../style/Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">TODO</h1>
      <Switcher />
    </header>
  );
}

export default Header;
