/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/planet.png';
import '../index.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/profile',
    text: 'My profile',
  },
];

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-secondary border-2">
      <Navbar.Brand className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="iamge" width="60" height="60" className="ms-3" />
        <h2 className="ms-3">Space Traverler&apos;s Hub</h2>
      </Navbar.Brand>
      <Navbar.Toggle className="me-3" />
      <Navbar.Collapse>
        <Nav className="ms-auto d-flex align-items-center me-3">
          <Nav.Item className="px-2">
            {links.map((link) => (

              <Nav.Link key={link.id} eventKey="1" as={Link} exact to={link.path} className="fs-5 text-primary fw-bold" activeClassName="underline">
                {link.text}
              </Nav.Link>
            ))}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
