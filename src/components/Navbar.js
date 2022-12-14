import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="nav-container">
      <div className="links">
        <h1 className="nav-title"><Link to="Home"><span>Bookstore CMS</span></Link></h1>
        <ul className="navbar">
          <li className="nav-item"><Link to="Books">BOOKS</Link></li>
          <li className="nav-item"><Link to="Categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <span className="nav-icon"><FaUserAstronaut /></span>
    </header>
  );
}

export default Navbar;
