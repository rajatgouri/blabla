import React from "react";
import logo from "../../images/logo.svg";
import user from "../../images/user.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" container d-flex justify-content-between">
      <img src={logo} className="img-fluid my-4" alt="logo" />
      <div>
        <Link to="/login">
          <img
            src={user}
            className="img-fluid my-4"
            alt="user"
            style={{ borderRadius: "50%" }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fas fa-chevron-down text-muted"></i>
        </Link>
        {/* <div className="bg-white" style={{width: '300px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 36px 36px 0px', visibility: 'hidden'}}>
          <Link to="/login">
            <div className="d-flex justify-content-between grey-hover py-3 px-3">
              <div className="text-primaryColor font-demi font-18">
                Login
              </div>
              <i className="text-muted fas fa-chevron-right"></i>
            </div>
          </Link>
          <hr className="my-0 py-0"/>
          <Link to="/login">
            <div className="d-flex justify-content-between grey-hover py-3 px-3">
              <div className="text-primaryColor font-demi font-18">
                Sign up
              </div>
              <i className="text-muted fas fa-chevron-right"></i>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
