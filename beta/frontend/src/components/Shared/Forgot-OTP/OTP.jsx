import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { verifyForgotEmailOtp } from "../../../redux/actions/auth";
import swal from "sweetalert";

function ForgotOTP() {
  
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp) {
      dispatch(verifyForgotEmailOtp(otp, history));
    } else {
      swal({
        text: "Please enter otp",
        icon: "info",
      });
    }
  };
  
  const handleChange = (otp) => {
    setOtp(otp);
  };
  
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center mb-4">
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Please enter the verification code on your email.
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center">
                  <OtpInput
                    value={otp}
                    numInputs={6}
                    separator={<span>&nbsp;&nbsp;</span>}
                    onChange={handleChange}
                    inputStyle={{
                      margin: "5px",
                      height: "2.5rem",
                      width: "2.5rem",
                      backgrounColor: "#fffff",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
                    }}
                    focusStyle={{
                      outline: "none",
                    }}
                  />
                </div>
                <div className="text-center mt-3">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
                  >
                    Continue
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

export default ForgotOTP;
