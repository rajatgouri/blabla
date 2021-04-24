import React from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
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
              {/* <div
                className="card my-2 bg-primaryColor text-white font-bold p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                Rides close to you
                <br />
                <div className="font-medium">
                  Now you see which drivers can pick you up and drop you off
                  nearby.
                </div>
              </div> */}
              <div
                className="text-muted font-18 font-medium mt-4 pl-2"
                style={{ letterSpacing: "-0.5px" }}
              >
                Delhi &nbsp;<i className="fas fa-arrow-right"></i>&nbsp; Jaipur:
                <br />3 rides available
              </div>
              <div
                className="card mt-4 ride-card text-primaryColor font-medium p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                <div className="row">
                  <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                    <div className="font-bold text-green">9:45 AM</div>
                    <hr className="my-2" />
                    <div className="row my-3">
                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                        <div className="circle-ride-from"></div>
                        <div className="line-ride"></div>
                        <div className="circle-ride-to"></div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 col-10 px-0">
                        <div
                          style={{ marginTop: "-6px" }}
                          className="text-orange"
                        >
                          Delhi, Center
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "18px" }}
                          className="text-blue"
                        >
                          Jaipur, Rajasthan
                        </div>                        
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="text-orange">
                      <div className="font-bold mt-3">MONTREAL</div>
                      <div className="font-regular">
                        metro Namur Autoroute 50
                      </div>
                    </div>
                    <hr className="my-2" />

                    <div className="text-blue">
                      <div className="font-bold">GATINEAU</div>
                      McDonald's, Alumettieres et Maisonneuve
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 text-primaryColor font-bold">
                    <div className="d-flex justify-content-end text-muted">
                      &#36;540.00
                    </div>
                    <div className="mt-2 d-flex justify-content-end text-red">
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>
                    </div>
                    <div className="mt-2 d-flex justify-content-end text-violet">
                      <i className="fas fa-dollar-sign"></i>&nbsp;&nbsp;                      
                      <i className="fas fa-credit-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card mt-4 ride-card text-primaryColor font-medium p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                <div className="row">
                  <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                    <div className="font-bold text-green">9:45 AM</div>
                    <hr className="my-2" />
                    <div className="row my-3">
                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                        <div className="circle-ride-from"></div>
                        <div className="line-ride"></div>
                        <div className="circle-ride-to"></div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 col-10 px-0">
                        <div
                          style={{ marginTop: "-6px" }}
                          className="text-orange"
                        >
                          Delhi, Center
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "18px" }}
                          className="text-orange"
                        >
                          Jaipur, Rajasthan
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="text-orange">
                      <div className="font-bold mt-3">MONTREAL</div>
                      <div className="font-regular">
                        metro Namur Autoroute 50
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="text-blue">
                      <div className="font-bold">GATINEAU</div>
                      McDonald's, Alumettieres et Maisonneuve
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 text-primaryColor font-bold">
                    <div className="d-flex justify-content-end text-muted">
                      &#36;540.00
                    </div>
                    <div className="mt-2 d-flex justify-content-end text-red">
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>
                    </div>
                    <div className="mt-2 d-flex justify-content-end text-violet">
                      <i className="fas fa-dollar-sign"></i>&nbsp;&nbsp;                      
                      <i className="fas fa-credit-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card mt-4 ride-card text-primaryColor font-medium p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                <div className="row">
                  <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                    <div className="font-bold text-green">9:45 AM</div>
                    <hr className="my-2" />
                    <div className="row my-3">
                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                        <div className="circle-ride-from"></div>
                        <div className="line-ride"></div>
                        <div className="circle-ride-to"></div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 col-10 px-0">
                        <div
                          style={{ marginTop: "-6px" }}
                          className="text-orange"
                        >
                          Delhi, Center
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "18px" }}
                          className="text-orange"
                        >
                          Jaipur, Rajasthan
                        </div>                        
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="text-orange">
                      <div className="font-bold mt-3">MONTREAL</div>
                      <div className="font-regular">
                        metro Namur Autoroute 50
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="text-blue">
                      <div className="font-bold">GATINEAU</div>
                      McDonald's, Alumettieres et Maisonneuve
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 text-primaryColor font-bold">
                    <div className="d-flex justify-content-end text-muted">
                      &#36;540.00
                    </div>
                    <div className="mt-2 d-flex justify-content-end text-red">
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>&nbsp;
                      <i className="fas fa-male"></i>
                    </div>
                    <div className="mt-2 d-flex justify-content-end text-violet">
                      <i className="fas fa-dollar-sign"></i>&nbsp;&nbsp;                      
                      <i className="fas fa-credit-card"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/signup/name">
              <div className="text-center my-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Create a ride alert
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ride;
