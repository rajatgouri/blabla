import React from "react";
import logo from "../../images/logo.svg";

function Navbar() {
  return (
    <div style={{ background: "#EDEDED" }}>
      <img src={logo} className="img-fluid mt-3 mb-4 ml-4" />
    </div>
  );
}

export default Navbar;
