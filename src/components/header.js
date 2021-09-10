/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import '../index.css';

const NavBar = () => (
  <nav className="nav">
    <div className="logo">
      <img className="img" src={logo} alt="planet with two moons and a ring" />
      <h1 className="title">Space Traveler's Hub</h1>
    </div>
    <div className="linkDiv">
      <NavLink className="link" exact activeClassName="selected" to="/">Rockets</NavLink>
      <NavLink className="link" exact activeClassName="selected" to="/missions">Missions</NavLink>
      <NavLink className="link profile" exact activeClassName="selected" to="/profile">My Profile</NavLink>
    </div>
  </nav>
);

export default NavBar;
