import React from "react";
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

                <div className="font-demi  text-primaryColor mt-4 pt-3 pb-3">
                  <div className="clear-fix">
                    <span className="float-left">
                      Don't have an account?<a href="/client/signup" className="ml-2">Signup here</a>
                    </span>
                    <span className="float-right"> 
                      Forgot Password?
                    </span>
                  </div>
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
