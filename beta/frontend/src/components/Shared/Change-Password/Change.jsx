import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changePassword } from "../../../redux/actions/auth";
import { Link } from "react-router-dom";

import "./Change.css";

function Change() {
  const initialState = { password: "" };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(formData.password, history));
    setformData(initialState);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold text-primaryColor mb-4">
              Enter the New Password
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
                  <input
                    required
                    value={formData.password}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
                  >
                    Submit
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

export default Change;
