import React, { useEffect }  from "react";
import userImg from "../../../images/profile_avatar.png";
import "./UserProfile.css";
import { useDispatch , useSelector} from 'react-redux';
import { getLoggedInUser } from "../../../redux/actions/auth";
import { Link} from "react-router-dom";
import { url } from "../../../redux/api/index";

function DriverVehicles() {
  const dispatch = useDispatch();
  let user = useSelector(state => state.auth?.authData?.user);
  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [])
  return (
    <>
    <div className="d-flex justify-content-between">
      <div className="col-lg-2 col-md-3 hidden-mobile-sidebar">
          <div>
            <ul class="navbar-nav flex-column">
              <li class="nav-item heading-hover-main">
                <a class="nav-link ">
                  <span className="font-bold main-heading-hover">
                  <i className="fas fa-user-cog mr-2"></i> Settings 
                  </span>
                  <hr className="white-hr"></hr>
                </a>
              </li>
              <li
                class="nav-item active item-bottom"
              >
                <Link class="nav-link custom-nav-link" to="/driver/userProfile">
                  <i class="fa fa-angle-right ml-1 mr-2"></i>
                    User Profile 
                  </Link>
              </li>
              <li
                class="nav-item active item-bottom"
              >
                <Link class="nav-link custom-nav-link" to="/driver/driver-license">
                  <i class="fa fa-angle-right ml-1 mr-2"></i>
                    Driver ID
                  </Link>
              </li>
              <li
                class="nav-item active item-bottom"
              >
                <Link class="nav-link custom-nav-link"  to="/driver/my-vehicles">
                  <i class="fa fa-angle-right ml-1 mr-2"></i>
                    Vehicles 
                  </Link>
              </li>
            </ul>
          </div>
      </div>
      <div className="container mb-5 col-lg-9 col-md-12 col-sm-12 col-12">
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
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center bg-tertiaryColor py-3 mt-3">
                      <div className="card">
                        <form>
                        <div className="input-group mt-4 font-medium w-95">
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
                            <div className="row d-flex">
                            <div className="input-group mt-4 ml-3 font-medium w-50">
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
                          <div className="input-group mt-4 font-medium w-45 ml-3">
                            <input
                              type="text"
                              className="form-control"
                              value={v?.color}
                              readOnly="true"
                              placeholder="Vehicle Color"
                              name="color"
                            />
                          </div>
                          </div>
                          <div className="row d-flex">
                            <div className="input-group mt-4 font-medium w-50 ml-3">
                            <input
                              type="number"
                              className="form-control"
                              value={v?.places}
                              readOnly="true"
                              placeholder="Number of Places"
                              name="places"
                            />
                           </div>
                           <div className="input-group mt-4 font-medium w-45 ml-3">
                            <input
                              type="text"
                              className="form-control"
                              value={v?.modelYear}
                              readOnly="true"
                              placeholder="Model Year"
                              name="modelYear"
                            />
                          </div>
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
    </div>
    </>
  );
}

export default DriverVehicles;
