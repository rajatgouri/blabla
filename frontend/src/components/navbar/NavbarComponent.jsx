import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="nav-background py-2 px-3"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img src={Logo} alt="logo" className="img-fluid py-0 my-0" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link
                href="/"
                className="font-demi font-17 px-3 navbar-item
                  text-primaryColor text-center"
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/blogs/carRental" activeClassName="activeNav">
              <Nav.Link
                href="/blogs/carRental"
                className="font-demi font-17 px-3 navbar-item
                  text-primaryColor text-center"
              >
                Rental cars
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact" activeClassName="activeNav">
              <Nav.Link
                href="/contact"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Contact Us
              </Nav.Link>
            </NavLink>
            <Nav.Link
              className="font-demi font-17 px-5
                mx-auto text-center text-white d-none d-lg-block bg-primaryColor"
              as={Link}
              to="/login"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
