import React from "react";
import user from "../../../images/profile_avatar.png";
import "./UserProfile.css";

function DriverUserProfile() {
  return (
    <>
      <div class="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 ">
            <div className="py-3 bg-tertiaryColor">
              <div className="font-25 text-center mb-3 font-demi text-primaryColor">
                User Profile
              </div>
              <div class="text-center">
                <img src={user} alt="img" class="mb-3 img-fluid user" />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
            <div className="bg-tertiaryColor h-100 py-5 px-3">
              <form>
                <div className="input-group">
                  <input
                    required
                    name="Name"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    disabled
                  />
                </div>
                <div className="d-flex">
                  <div className="input-group mt-4">
                    <input
                      required
                      name="email"
                      type="text"
                      className="form-control w-50"
                      placeholder="Email"
                      disabled
                    />
                  </div>
                  <div className="input-group mt-4 ml-3">
                    <input
                      required
                      name="phone no"
                      type="text"
                      className="form-control w-50"
                      placeholder="Contact Number"
                      disabled
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 col-sm-12 col-12 col-md-6">
            <div className="card">
              <img
                src="https://source.unsplash.com/random"
                alt="verification-id"
                className="img-fluid p-5"
                style={{
                  background: "#e0f6ff",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12 col-md-6">
            <div className="card">
              <img
                src="https://source.unsplash.com/random"
                alt="verification-id"
                className="img-fluid p-5"
                style={{
                  background: "#e0f6ff",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div className="card">
              <form>
                <div className="input-group mt-4 font-medium">
                  <select
                    type="text"
                    className=""
                    placeholder="Vehicle Type"
                    name="vehicleType"
                  >
                    <option selected disabled>
                      Vehicle type
                    </option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                  </select>
                </div>
                <div className="input-group mt-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Places"
                    name="places"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Model Year"
                    name="modelYear"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle Color"
                    name="color"
                  />
                </div>
                <div className="text-center mt-4">
                  <button className="text-white bg-secondaryColor font-demi btn-blue submit-button">
                    Add Vehicle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverUserProfile;
