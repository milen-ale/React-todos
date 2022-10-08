import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="nav-conatainre">
      <nav className="nav">
        <a href="/" className="milen-todo">Milen`&apos;`, s Todo</a>
        <ul className="nav_ul">
          <li className="nav-list">
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/todo">Todo</a>

          </li>

        </ul>

      </nav>
    </div>
  );
}

export default Navbar;
