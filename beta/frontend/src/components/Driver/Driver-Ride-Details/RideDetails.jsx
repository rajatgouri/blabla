import React from "react";
import { Link } from "react-router-dom";
import "./RideDetails.css";

function DriverRideDetails() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-2 col-12">
            <div className="card">
              <h2
                className="card my-2 text-primaryColor text-center font-bold"
                style={{ fontSize: "35px" }}
              >
                Fri, 30 April
              </h2>
              <div
                className="card mt-4 text-primaryColor font-medium px-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                <div className="row grey-hover pt-3 pb-2">
                  <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                    <div className="circle-ride-from"></div>
                    <div className="line-ride"></div>
                    <div className="circle-ride-to"></div>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-10 col-10 px-0">
                    <div style={{ marginTop: "-6px" }} className="text-orange">
                      MONTREAL
                      <br />
                      <div className="font-regular">
                        metro Namur Autoroute 50
                      </div>
                    </div>
                    <div></div>
                    <div style={{ marginTop: "18px" }} className="text-blue">
                      GATINEAU <br />
                      <div className="font-regular">
                        McDonald's, Alumettieres et Maisonneuve
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="mapouter">
                  <div className="gmap_canvas">
                      <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=gatineu%20mc%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                      </iframe>
                      <a href="https://soap2day-to.com"></a><br /><a href="https://www.embedgooglemap.net"></a>
                    </div>
                </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Started at
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  9:45 AM
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Ended at
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  4:45 PM
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Price per seat
                </div>
                <div className="text-primaryColor font-bold font-18">
                  &#36;540.00
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Total seats Provided
                </div>
                <div className="text-primaryColor font-bold font-18">
                  4
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Seats Booked
                </div>
                <div className="text-primary font-bold font-18">
                  3
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Seats that were vacant
                </div>
                <div className="text-danger font-bold font-18">
                  1
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Total Earnings
                </div>
                <div className="text-green font-bold font-18">
                &#36;1620.00
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3 mb-5">
                <div className="text-muted font-demi font-18">
                  Feedback
                </div>
                <div className="text-green font-bold font-18">
                4.5 <i class="fas fa-star text-green"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverRideDetails;
