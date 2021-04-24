import React from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import { Link } from "react-router-dom";
import "./ride.css";

function Ride() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-2 col-12">
            <div className="card">
              <div className="card my-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-2x fa-search"></i>
                    </span>
                  </div>
                  <span
                    type="text"
                    className="text-primaryColor font-demi font-18 ride-text"
                  >
                    Delhi, Centre <span className="font-regular">to </span>
                    <span className="font-demi">
                      Jaipur, Rajasthan, City Centre
                    </span>
                    <br />
                    <span className="text-muted font-demi font-16">
                      Fri, 30 April
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="card my-2 bg-primaryColor text-white font-bold p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                Rides close to you
                <br />
                <div className="font-medium">
                  Now you see which drivers can pick you up and drop you off
                  nearby.
                </div>
              </div>
              <div
                className="card my-4 ride-card text-primaryColor font-medium p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                    <div style={{ color: "green" }} className="font-bold">
                      9:45 AM
                    </div>
                    <hr className="my-2" />
                    <div style={{ color: "orange" }}>
                      <div className="font-bold">MONTREAL</div>
                      Metro Namur <br />
                      Autoroute 50 <br />
                    </div>
                    <hr className="my-2" />
                    <div style={{ color: "blue" }}>
                      <div className="font-bold">GATINEAU</div>
                      McDonald's, Alumettieres et Maisonneuve
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    Autoroute 50 <br />
                    GATINEAU <br />
                    McDonald's, Alumettieres et Maisonneuve
                  </div>
                </div>
              </div>
            </div>
            <Link to="/signup/name">
              <div className="text-center my-4">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Create a ride alert
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ride;
