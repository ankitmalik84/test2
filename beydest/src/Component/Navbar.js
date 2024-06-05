import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assist/Logo3.png';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  shadow-sm bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width={150} height={70} className="d-inline-block align-text-top" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/swatch" activeClassName="active">
                Swachh Pawan
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
