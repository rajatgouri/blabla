import React, { useEffect }  from "react";
import userImg from "../../../images/profile_avatar.png";
import "./UserProfile.css";
import { useDispatch , useSelector} from 'react-redux';
import { getLoggedInUser } from "../../../redux/actions/auth";
import { Link} from "react-router-dom";
import { url } from "../../../redux/api/index";

function DriverLicense() {
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
      </div>
    </div>
    </>
  );
}

export default DriverLicense;
