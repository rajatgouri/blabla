import React from "react";
import { Link } from "react-router-dom";

function Password() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="card">
            <h1 className="text-center font-bold text-primaryColor mb-4">
              You'll need a password too.
            </h1>
            <form>
              <div className="input-group mt-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password (min. 8 characters)"
                />
              </div>
              <div className="text-center mt-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
