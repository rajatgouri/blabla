import React from "react";
import logo from "../../images/logo.svg";
import user from "../../images/user.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" container d-flex justify-content-between">
      <img src={logo} className="img-fluid my-4" alt="logo" />
      <Link to="/login">
        <img
          src={user}
          className="img-fluid my-4"
          alt="user"
          style={{ borderRadius: "50%" }}
        />
      </Link>
    </div>
  );
}

export default Navbar;
