import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav-container">
      <h1 className="nav-title">Bookstore CMS</h1>
      <ul className="navbar">
        <li className="nav-item"><Link to="Books">BOOKS</Link></li>
        <li className="nav-item"><Link to="Categories">CATEGORIES</Link></li>
      </ul>
      <span className="nav-icon">user icon</span>
    </header>
  );
}

export default Navbar;