import React from "react";
import { Link } from "react-router-dom";

function AddRide() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Add Ride Info
              </h1>
              <form>
              <div className="d-flex">
              <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control w=50"
                    placeholder="Going From"
                  />
                </div>
                <div className="input-group mt-4 ml-3">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Going To"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Date of Travel"
                  />
                </div>
                <div className="input-group mt-4 ml-3">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Time of Travel"
                  />
                </div>
              </div>
              <div className="d-flex">
              <div className="input-group mt-4 font-medium">
                <select
                    type="text"
                    className=""
                    placeholder="Select Vehicle"
                  >
                    <option selected disabled>Select Vehicle</option>
                    <option value="Vehicle 1">Vehicle 1</option>
                    <option value="Vehicle 2">Vehicle 2</option>
                  </select>
                </div>
                <div className="input-group mt-4 ml-3">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Price Per Seat"
                  />
                </div> 
              </div>            
                <Link to="/">
                  <div className="text-center mt-4">
                    <button className="text-white bg-secondaryColor font-demi btn-blue submit-button">
                      Add Ride
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

export default AddRide;
