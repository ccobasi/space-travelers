/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/planet.png';
import '../index.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-secondary border-2">
      <Navbar.Brand className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="iamge" width="60" height="60" className="ms-3" />
        <h2 className="ms-3">Space Traverler&apos;s Hub</h2>
      </Navbar.Brand>
      <Navbar.Toggle className="me-3" />
      <Navbar.Collapse>
        <Nav
          activeKey="/"
          /* eslint-disable-next-line */
          onSelect={(selectedKey) => alert(`You just selected ${selectedKey} !`)}
          className="ms-auto d-flex align-items-center me-3"
        >
          <Nav.Item className="px-2">
            <Nav.Link eventKey="1" as={Link} exact to="/" className="fs-5 text-primary fw-bold" activeClassName="underline">
              Rockets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="px-2">
            <Nav.Link eventKey="2" as={Link} exact to="/missions" className="fs-5 text-success fw-bold" activeClassName="underline">
              Missions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pt-2 h1 text-secondary not-in-movile-size">
            |
          </Nav.Item>
          <Nav.Item className="px-2">
            <Nav.Link eventKey="3" as={Link} exact to="/profile" className="fs-5 text-danger fw-bold" activeClassName="underline">
              My Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
