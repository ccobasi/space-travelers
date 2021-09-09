/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import '../index.css';

const NavBar = () => (
  <nav className="nav">
    <div className="logo">
      <img className="img" src={logo} alt="planet with two moons and a ring" />
      <h1 className="title">Space Traveler&apos;s Hub</h1>
    </div>
    <div className="linkDiv">
      <NavLink className="link" exact to="/">Rockets</NavLink>
      <NavLink className="link" exact to="/missions">Missions</NavLink>
      <NavLink className="link" exact to="/profile">Profile</NavLink>
    </div>
  </nav>
);

export default NavBar;
