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
                <Link class="nav-link custom-nav-link" to="/driver/my-vehicles">
                  <i class="fa fa-angle-right ml-1 mr-2"></i>
                    Vehicles 
                  </Link>
              </li>
            </ul>
          </div>
      </div>
      <div className="container mb-5 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="row mt-5">
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
      </div>
    </div>
    </>
  );
}

export default DriverUserProfile;
