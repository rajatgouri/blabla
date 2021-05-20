import React, { useEffect }  from "react";
import userImg from "../../../images/profile_avatar.png";
import "./UserProfile.css";
import { useDispatch , useSelector} from 'react-redux';
import { getLoggedInUser } from "../../../redux/actions/auth";
import { Link} from "react-router-dom";
import { url } from "../../../redux/api/index";

function DriverUserProfile() {
  const dispatch = useDispatch();
  let user = useSelector(state => state.auth?.authData?.user);
  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [])
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
              {user && user.profilePicture=='test'? (
                <img src={userImg} alt="img" class="mb-3 img-fluid user" />
                ): (
                    <img src={url+'/'+user?.profilePicture} alt="img" class="mb-3 img-fluid user" />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
            <div className="bg-tertiaryColor h-100 py-5 px-3">
              <form>
                <div className="input-group font-medium">
                  <input
                    required
                    name="Name"
                    type="text"
                    value={user?.fullName}
                    className="form-control"
                    placeholder="Full Name"
                    disabled
                  />
                </div>
                <div className="d-flex">
                  <div className="input-group mt-4 font-medium">
                    <input
                      required
                      name="email"
                      type="text"
                      value={user?.email}
                      className="form-control w-50"
                      placeholder="Email"
                      disabled
                    />
                  </div>
                  <div className="input-group mt-4 ml-3 font-medium">
                    <input
                      required
                      name="phone no"
                      type="text"
                      value={'+'+user?.phone}
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
        <div className="row mt-5">
          <h2 className="ml-4 font-demi text-primaryColor">My Driver License</h2>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-sm-12 col-12 col-md-6">
            <div className="card">
              <img
                src={url+'/'+user?.frontId}
                alt="verification-id"
                className="img-fluid p-5 height-500"
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
                src={url+'/'+user?.backId}
                alt="verification-id"
                className="img-fluid p-5 height-500"
                style={{
                  background: "#e0f6ff",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h2 className="ml-4 font-demi text-primaryColor">My Vehicles <Link to="/driver/details-add-vehicle"><i className="fa fa-plus" aria-hidden="true"></i></Link></h2>
        </div>
        {
          user && user?.vehicles?.length>0 ? (
            user.vehicles.map((v,i)=>{
              return (
                <>
                  <div className="row mt-5">
                    <h4 className="ml-4 font-demi text-primaryColor">Vehicle {i+1}</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                      <div className="card">
                        <form>
                          <div className="input-group mt-4 font-medium">
                            <input
                              type="text"
                              className="form-control"
                              value={v?.vehicleType}
                              disabled
                              placeholder="Vehicle Type"
                              name="vehicleType"
                            >
                            </input>
                          </div>
                          <div className="input-group mt-4 font-medium">
                            <input
                              type="text"
                              className="form-control"
                              value={v?.modelName}
                              disabled
                              placeholder="Vehicle Type"
                              name="vehicleType"
                            >
                            </input>
                          </div>
                          <div className="input-group mt-4 font-medium">
                            <input
                              type="number"
                              className="form-control"
                              value={v?.places}
                              readOnly="true"
                              placeholder="Number of Places"
                              name="places"
                            />
                          </div>
                          <div className="input-group mt-4 font-medium">
                            <input
                              type="text"
                              className="form-control"
                              value={v?.modelYear}
                              readOnly="true"
                              placeholder="Model Year"
                              name="modelYear"
                            />
                          </div>
                          <div className="input-group mt-4 font-medium">
                            <input
                              type="text"
                              className="form-control"
                              value={v?.color}
                              readOnly="true"
                              placeholder="Vehicle Color"
                              name="color"
                            />
                          </div>
                          {/* <div className="text-center mt-4">
                        <button className="text-white bg-secondaryColor font-demi btn-blue submit-button">
                          Edit
                        </button>
                      </div> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          ) : ''
        }
        {/* <div className="row mt-5">
          <h4 className="ml-4 font-demi text-primaryColor">Vehicle 1</h4>
        </div> */}
      </div>
    </>
  );
}

export default DriverUserProfile;
