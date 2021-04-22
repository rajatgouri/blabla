import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="card">
            <h1 className="text-center font-bold text-primrayColor mb-4">
              What's your email and password?
            </h1>
            <form>
              <div className="input-group mt-4">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mt-4">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </div>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <p className="text-secondaryColor font-demi forgot-password mt-4 py-3 px-3">
                Forgot Password
              </p>
              <div className="text-center mt-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
