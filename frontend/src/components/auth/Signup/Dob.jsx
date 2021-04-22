import React from "react";
import { Link } from "react-router-dom";

function Dob() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="card">
            <h1 className="text-center font-bold text-primaryColor mb-4">
              What's your date of birth?
            </h1>
            <form>
              <div className="input-group mt-4">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                />
              </div>
              <Link to="/signup/password">
                <div className="text-center mt-5">
                  <button className="text-white bg-secondaryColor font-demi btn-blue">
                    Continue
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dob;
