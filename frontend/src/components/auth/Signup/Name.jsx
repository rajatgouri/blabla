import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/NavbarComponent";
import Footer from "../../footer/Footer";

function Name() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                So what's your name?
              </h1>
              <form>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <Link to="/signup/dob">
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
      <Footer />
    </>
  );
}

export default Name;
