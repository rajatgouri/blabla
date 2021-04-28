import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Features from "./Features/Features";
import Work from "./Work/Work";

function ClientHome() {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row pt-10">
            <div className="col-lg-6 col-md-5 col-sm-12 col-12">
              <div className="card px-4">
                <h1 className="text-primaryColor font-bold main-heading">
                  Carpooling <br />
                  simplified.
                </h1>
                <p className="font-demi text-primaryColor home-para">
                  Introducing the end of carpool hassle.
                  <br />
                  With access to millions of journeys,
                  <br />
                  you can quickly find people nearby travelling your way
                  <br />
                  and book a ride within seconds.
                </p>
                <Link to="/driver/signup">
                  <div className="mobile-center">
                    <button className="home-button text-white font-demi py-2 px-4">
                      Become a driver &nbsp;&nbsp;&nbsp;
                      <i className="fas fa-arrow-right text-white"></i>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-12 mb-5 mt-lg-0 mt-5">
              <div className="card bg-white py-5 px-lg-5 px-3 mx-lg-5 mx-4">
                <h4 className="font-bold font-20 text-primaryColor mobile-center">
                  Enter your location , destination and Date of travel
                </h4>
                <div className="mt-4">
                  <div>
                    <label className="text-muted font-demi font-18">
                      City From
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="From"
                  />
                </div>
                <div className="mt-3">
                  <label className="text-muted font-demi font-18">
                    City To
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="To"
                  />
                </div>
                <div className="mt-3">
                  <label className="text-muted font-demi font-18">
                    Date of travel
                  </label>
                  <input
                    type="Date"
                    className="form-control mt-1"
                    placeholder="On"
                  />
                </div>
                <Link to="/client/ride">
                  <div className=" mt-4 mobile-center">
                    <button className="home-button text-white font-demi py-2 px-4">
                      Check
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Features />

      <Work />

    </>
  );
}

export default ClientHome;
