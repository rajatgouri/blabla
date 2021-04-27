import React from "react";
import { Link } from "react-router-dom";
import "./reserve.css";

function ClientReserve() {
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
                  <div className="col-lg-11 col-md-11 col-sm-11 col-11 px-0">
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
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Total price for 1 passenger
                </div>
                <div className="text-primaryColor font-bold font-18">
                  &#36;540.00
                </div>
              </div>
              <hr className="grey-hr" />
            </div>

            <Link to="/">
              <div className="text-center mt-4 mb-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Continue
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientReserve;
