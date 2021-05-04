import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../../images/logo.png";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../../constants";


function NavbarComponent() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const isDriver = location.pathname.includes("/driver");
  const isLoggedIn = localStorage.getItem("token");
  const signup = isDriver ? "/driver/signup" : "/client/signup";
  const home = isDriver ? "/driver/home" : "";

  const logout = () => {
    dispatch({ type: LOGOUT });    
    history.push("/");
  };
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="nav-background  py-2 px-3"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href={home} className="mx-0">
          <img src={Logo} alt="logo" className="img-fluid py-0 my-0 logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!isDriver ? (
              <NavLink exact to="/" activeClassName="activeNav">
                <Nav.Link
                  href="/"
                  className="font-demi font-17 px-3 navbar-item
                text-primaryColor text-center"
                >
                  Company
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {isDriver ? (
              <NavLink exact to="/driver/add-ride" activeClassName="activeNav">
                <Nav.Link
                  href="/driver/add-ride"
                  className="font-demi font-17 px-3 navbar-item
                text-primaryColor text-center"
                >
                  Add Ride
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {isDriver ? (
              <NavLink exact to="/driver/all-ride" activeClassName="activeNav">
                <Nav.Link
                  href="/driver/all-ride"
                  className="font-demi font-17 px-3 navbar-item
                text-primaryColor text-center"
                >
                  All Rides
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            <NavLink to="/client/contact" activeClassName="activeNav">
              <Nav.Link
                as={Link}
                to="/client/contact"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Contact Us
              </Nav.Link>
            </NavLink>
            {!isLoggedIn ? (
              <NavLink to="/login" activeClassName="activeNav">
                <Nav.Link
                  href="/login"
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
                >
                  Login
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <NavLink to={signup} activeClassName="activeNav">
                <Nav.Link
                  href={signup}
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
                >
                  Signup
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <Nav
                className="font-demi font-17
                  px-3 navbar-item text-white text-center pt-1 home-button"
                onClick={logout}
              >
                Logout
              </Nav>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
