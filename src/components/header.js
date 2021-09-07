/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import logo from '../assets/planet.png';
import '../index.css';

const NavBar = () => (
  <nav className="nav">
    <div className="logo">
      <img className="img" src={logo} alt="planet with two moons and a ring" />
      <h1 className="title">Space Traveler's Hub</h1>
    </div>
    <div className="linkDiv">
      <a className="link" href="a">Rockets</a>
      <a className="link" href="a">Missions</a>
      <a className="link profile" href="a">My Profile</a>
    </div>
  </nav>
);

export default NavBar;
