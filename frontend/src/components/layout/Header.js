import React from 'react';
import {Container , Nav , Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css"

function Header() {
  return (
    <Navbar style={{position:'fixed',top:'0',width:'100%',zIndex:'2'}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">SSzone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{gap:'2rem'}} className="me-auto ms-5">
            <NavLink className={classes.nav_link} to="/vehicles">Buy</NavLink>
            {/* <NavLink className={classes.nav_link} to="#home">Finance</NavLink> */}
            <NavLink className={classes.nav_link} to="/appointment">Book Appointment</NavLink>
            <NavLink className={classes.nav_link} to="/contact">Contact Us</NavLink>
            <NavLink className={classes.nav_link} to="#home">About Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;