import React from "react";
import {Link} from 'react-router-dom'
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold text-primaryColor mb-4">
              Sign in to your account
              </h4>
              <form>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email/Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="d-flex justify-content-between">
                <Link to="/signup">
                  {" "}
                  <div className="font-demi grey-hover text-primaryColor mt-4 py-3 px-3">
                    Become a member{" "}                   
                    <span className="ml-2 text-secondaryColor">Signup</span>
                  </div>
                </Link>
                <p className="text-secondaryColor font-demi grey-hover mt-4 py-3 px-3">
                  Forgot Password
                </p>
                </div>

                <div className="text-center mt-5">
                  <button className="text-white bg-secondaryColor font-demi btn-blue">
                    Signin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;