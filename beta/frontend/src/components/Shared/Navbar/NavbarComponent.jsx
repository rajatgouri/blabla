import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../../images/logo.png";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../../redux/constants";
import avatar from "../../../images/profile_avatar.png";

function NavbarComponent() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const isDriver = location.pathname.includes("/driver");
  const isLoggedIn = localStorage.getItem("token");
  const signup = isDriver ? "/driver/signup" : "/client/signup";
  const home = isDriver ? "/driver/home" : "";
  const userProfile = isDriver ? "/driver/userProfile" : "/client/userProfile";
  const myRides = isDriver ? "/driver/all-ride" : "/client/all-ride";
  const idPage = isDriver ? "/driver/driver-license" : "/client/my-id";
  const displayDocument = isDriver ? "Driver License" : "My ID";

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
            {isDriver && isLoggedIn ? (
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
            {isDriver && isLoggedIn ? (
              <NavLink exact to={myRides} activeClassName="activeNav">
                <Nav.Link
                  href="/driver/all-ride"
                  className="font-demi font-17 px-3 navbar-item
                text-primaryColor text-center hidden-desktop"
                >
                  My Rides
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
              <NavLink to="/login" activeClassName="activeNav hidden-desktop">
                <Nav.Link
                  href="/login"
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center hidden-desktop"
                >
                  Login
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <NavLink to={signup} activeClassName="activeNav hidden-desktop">
                <Nav.Link
                  href={signup}
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center hidden-desktop"
                >
                  Signup
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {isLoggedIn ?  (
              <NavLink to={userProfile} activeClassName="activeNav hidden-desktop">
                <Nav.Link
                  href={userProfile}
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center hidden-desktop"
                >
                  User Profile
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {isLoggedIn ?  (
              <NavLink to={idPage} activeClassName="activeNav hidden-desktop">
                <Nav.Link
                  href={idPage}
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center hidden-desktop"
                >
                  {displayDocument}
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            {isLoggedIn && isDriver ?  (
              <NavLink to="/driver/my-vehicles" activeClassName="activeNav hidden-desktop">
                <Nav.Link
                  href="/driver/my-vehicles" 
                  className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center hidden-desktop"
                >
                  Vehicles
                </Nav.Link>
              </NavLink>
            ) : (
              ""
            )}
            
            {isLoggedIn ? (
              <Nav
                className="font-demi font-17
                  px-3 navbar-item text-white text-center pt-1 home-button hidden-desktop"
                onClick={logout}
              >
                Logout
              </Nav>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <NavDropdown
                eventKey={1}
                title={
                  <div className="pull-left hidden-mobile">
                    <img
                      className="thumbnail-image text-center"
                      src={avatar}
                      alt="user pic"
                      width="30"
                      height="30"
                      className="mr-1"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                }
                id="basic-nav-dropdown"
              >
              <NavDropdown.Item eventKey={1.3}>
                <Link to={myRides}>
                  <div className="font-demi text-primaryColor">
                  <i class="fas fa-car-side mr-1"></i>
                      &nbsp;My Rides
                    </div>
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={1.3}>
                <Link to={userProfile}>
                  <div className="font-demi text-primaryColor">
                  <i className="fas fa-user-cog mr-2"></i>
                      Settings
                    </div>
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={1.3} onClick={logout}>
                  <div className="font-demi text-primaryColor">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                      Logout
                    </div>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown
                eventKey={1}
                title={
                  <div className="pull-left">
                    <img
                      className="thumbnail-image"
                      src={avatar}
                      alt="user pic"
                      width="30"
                      height="30"
                      className="mr-5"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/login">
                    <div className="font-demi text-primaryColor">
                      <i className="fas fa-sign-in-alt mr-2"></i>
                      Login
                    </div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={signup}>
                    <div className="font-demi text-primaryColor">
                      <i className="fas fa-user-circle mr-2"></i>
                      Signup
                    </div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
