import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/">
          <div className="brand-logo"> Jazda </div>
        </Link>
      </div>
      <ul className="right">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
