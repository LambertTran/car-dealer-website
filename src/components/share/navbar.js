import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar(){
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"> Brand  </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to='/' className="nav-link"> Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/autos' className="nav-link"> Autos </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/#' className="nav-link"> About </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}