import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="card">
            <h1 className="text-center font-bold text-primaryColor mb-4">
              How do you want to sign up?
            </h1>
            <Link to="/signup/email">
              <div className="text-primaryColor font-demi grey-hover mt-4 py-3 px-3 font-18">
                Continue with email
              </div>
            </Link>
            <hr />
            <div className="text-primaryColor px-3 font-16 font-demi mt-3 d-flex">
              Already a member?&nbsp;&nbsp;
              <Link to="/login">
                <div className="text-secondaryColor">Sign in</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
