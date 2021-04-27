import React from "react";
import { Link } from "react-router-dom";
import "./Ride.css";

function ClientRide() {
  return (
    <>
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
                    MONTREAL <span className="font-regular">to </span>
                    <span className="font-demi">GATINEAU</span>
                    <br />
                    <span className="text-muted font-demi font-16">
                      Fri, 30 April
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="text-muted font-18 font-medium mt-4 pl-2"
                style={{ letterSpacing: "-0.5px" }}
              >
                Montreal &nbsp;<i className="fas fa-arrow-right"></i>&nbsp;
                Gatineau:
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
                          MONTREAL
                          <br />
                          <div className="font-regular">
                            metro Namur Autoroute 50
                          </div>
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "18px" }}
                          className="text-blue"
                        >
                          GATINEAU <br />
                          <div className="font-regular">
                            McDonald's, Alumettieres et Maisonneuve
                          </div>
                        </div>
                      </div>
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
                    
                    <Link to="/client/reserve">
                      <div className="text-center mt-2 d-flex justify-content-end  ">
                        <button
                          className="text-white bg-secondaryColor font-demi rounded"
                          style={{ border: "none" }}
                        >
                          Reserve
                        </button>
                      </div>
                    </Link>
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
                          MONTREAL
                          <br />
                          <div className="font-regular">
                            metro Namur Autoroute 50
                          </div>
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "18px" }}
                          className="text-blue"
                        >
                          GATINEAU <br />
                          <div className="font-regular">
                            McDonald's, Alumettieres et Maisonneuve
                          </div>
                        </div>
                      </div>
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
                    
                    <Link to="/client/reserve">
                      <div className="text-center mt-2 d-flex justify-content-end  ">
                        <button
                          className="text-white bg-secondaryColor font-demi rounded"
                          style={{ border: "none" }}
                        >
                          Reserve
                        </button>
                      </div>
                    </Link>
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
                          MONTREAL
                          <br />
                          <div className="font-regular">
                            metro Namur Autoroute 50
                          </div>
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "18px" }}
                          className="text-blue"
                        >
                          GATINEAU <br />
                          <div className="font-regular">
                            McDonald's, Alumettieres et Maisonneuve
                          </div>
                        </div>
                      </div>
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
                    
                    <Link to="/client/reserve">
                      <div className="text-center mt-2 d-flex justify-content-end  ">
                        <button
                          className="text-white bg-secondaryColor font-demi rounded"
                          style={{ border: "none" }}
                        >
                          Reserve
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/">
              <div className="text-center mt-4 mb-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Change your ride
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientRide;
