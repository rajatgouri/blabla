import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/NavbarComponent";
import Footer from "../../footer/Footer";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                How do you want to sign up?
              </h1>
              <Link to="/signup/email">
                <div className="d-flex justify-content-between grey-hover mt-4 py-3 px-3">
                  <div className="text-primaryColor font-demi font-18">
                    Continue with email
                  </div>
                  <i className="text-muted fas fa-chevron-right"></i>
                </div>
              </Link>
              <hr />
              <div className="text-primaryColor px-3 font-16 font-demi mt-3 d-flex">
                Already a member?&nbsp;&nbsp;
                <Link to="/login">
                  <div className="text-secondaryColor">Sign in</div>
                </Link>
              </div>
              <div
                className="text-muted px-3 font-demi mt-3"
                style={{ fontSize: "11px" }}
              >
                By continuing, you accept our <a href="">ToS</a> and{" "}
                <a href="">Privacy Policy.</a>
                <br />
                This information is collected by COMUTO SA for the purposes of
                creating your account, managing your booking, use and improve our
                services and ensuring the security of our platform.
                <br /> You have rights on your personal data and can exercise them
                by contacting us through our <a href="">contact form.</a>
                <br /> You can learn more about your rights and how we handle your
                personal data in our <a href="">Privacy Policy.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
