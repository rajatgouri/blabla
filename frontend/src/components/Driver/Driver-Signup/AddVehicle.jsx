import React from "react";
import { Link } from "react-router-dom";
import { Stepper } from "react-form-stepper";

function AddVehicle() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-lg-10 col-sm-12 col-md-12 col-12 font-regular px-0">
            <Stepper
              steps={[
                { label: "Step 1" },
                { label: "Step 2" },
                { label: "Step 3" },
                { label: "Step 4" },
                { label: "Step 5" }
              ]}
              connectorStateColors={true}
              className="text-primaryColor"
              connectorStyleConfig={{
                activeColor: "#1e4c6b",
                completedColor: "#1e4c6b",
                disabledColor: "#bdbdbd",
                size: 1,
                stepSize: "0em",
              }}
              styleConfig={{
                activeBgColor: "#00AFF5",
                completedBgColor: "#1e4c6b",
                labelFontSize: "1rem",
                circleFontSize: "1rem",
                size: "3em",
                fontWeight: 900,
              }}
              activeStep={4}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Add Vehicle Info
              </h1>
              <form>
                <div className="input-group mt-4 font-medium">
                <select
                    type="text"
                    className=""
                    placeholder="Vehicle Type"
                  >
                    <option selected disabled>Vehicle type</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                  </select>
                </div>
                <div className="input-group mt-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Places"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Model Year"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle Color"
                  />
                </div>              
                <Link to="/">
                  <div className="text-center mt-4">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Add Vehicle
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

export default AddVehicle;
