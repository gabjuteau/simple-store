import React from "react";

function Header() {
  return (
    <header className="header">
      <div id="navbar" className="navbar top">
        <h1 className="logo">
          <span className="text-primary"><i className="fas fa-store"></i> Simple</span>Store
        </h1>

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;