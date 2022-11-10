import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav-container">
      <div className="links">
        <h1 className="nav-title"><Link to="Home">Bookstore CMS</Link></h1>
        <ul className="navbar">
          <li className="nav-item"><Link to="Books">BOOKS</Link></li>
          <li className="nav-item"><Link to="Categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <span className="nav-icon">user icon</span>
    </header>
  );
}

export default Navbar;