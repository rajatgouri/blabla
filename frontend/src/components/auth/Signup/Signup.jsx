import React from "react";

function Signup() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="card">
            <h1 className="text-center font-bold text-primrayColor mb-4">
              Create your account
            </h1>
            <form>
              <div className="input-group mt-4">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Fullname"
                />
              </div>
              <div className="input-group mt-4">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-calendar"></i>
                  </div>
                </div>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                />
              </div>
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
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
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
              <div className="text-center mt-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
