import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../images/logo.png';

export default function NavBar(){
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img className="float-left" src={logo} alt="" width="60" height="60" />
        <h4 className="float-left"> Auto27</h4>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink 
              to='/' exact 
              activeStyle={{
                fontWeight: 'bold',
                color: 'white !important'
              }}
              className="nav-link"
              > Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to='/autos' exact 
              activeStyle={{
                fontWeight: 'bold',
                color: 'white !important'
              }} 
              className="nav-link"
              > Inventory 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to='/sale' exact 
              activeStyle={{
                fontWeight: 'bold',
                color: 'white !important'
              }} 
              className="nav-link"
              > Sell your car 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to='/customer' exact 
              activeStyle={{
                fontWeight: 'bold',
                color: 'white !important'
              }}
              className="nav-link"
              > Happy Customers 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to='/about' exact 
              activeStyle={{
                fontWeight: 'bold',
                color: 'white !important'
              }}
              className="nav-link"
              > About 
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}