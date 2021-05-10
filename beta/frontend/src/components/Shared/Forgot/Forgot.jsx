import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { forgotEmailOtp } from "../../../redux/actions/auth";
import { Link } from "react-router-dom";

import "./Forgot.css";

function Forgot() {
  const initialState = { email: ""};
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotEmailOtp(formData, history));
    setformData(initialState);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold text-primaryColor mb-4">
              Enter the E-mail associated with your account
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
                  >
                    Send OTP
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

export default Forgot;
