import React from 'react';
import {Container , Nav , Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css"

function Header() {
  let urlArr = window.location.href.split('/')
  let urlArrLastEle = urlArr[urlArr.length - 1]

  return (
    <Navbar style={{position:'fixed',top:'0',width:'100%',zIndex:'2'}} expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className={classes.nav_link} to='/'>
          <Navbar.Brand>SSzone</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{gap:'2rem'}} className="me-auto ms-5">
            <NavLink className={classes.nav_link} to="/vehicles">Buy</NavLink>
            <NavLink className={classes.nav_link} to="/appointment">Book Appointment</NavLink>
            {urlArrLastEle === '' && <a className={classes.nav_link} href="#aboutUs">About Us</a>}
            {urlArrLastEle === '' && <a className={classes.nav_link} href="#contactUs">Contact Us</a>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;