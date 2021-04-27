import React from "react";
import Navbar from "../Navbar/NavbarComponent";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className=" font-bold text-primaryColor">
                Contact Us
              </h1>
              <div className="text-muted font-medium font-16 text mt-4">
                How can we help you out? If you fill out the form below, we will
                try to get back to you ASAP!
              </div>
              <p className="text-muted">
              <i>Fields marked with an asterisk (*) are required.</i> 
              </p>
              <form>
                <div className="d-flex justify-content-between">
                  <div className="input-group mt-4 w-50 mr-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name (*)"
                    />
                  </div>
                  <div className="input-group mt-4 w-50">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email (*)"
                    />
                  </div>
                </div>
                <div className="input-group mt-4 w-100">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message (*)"
                    rows="8"
                  ></textarea>
                </div>
                <Link to="/">
                  <div className="text-center mt-5">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Submit
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
