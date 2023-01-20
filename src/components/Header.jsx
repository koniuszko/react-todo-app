import Switcher from "./Switcher";

import "../style/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <h1 className="logo">TODO</h1>
        <Switcher />
      </div>
    </header>
  );
}

export default Header;
