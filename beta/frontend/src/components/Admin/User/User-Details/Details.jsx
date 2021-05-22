import React,{ useEffect }  from "react";
import userLogo from "../../../../images/profile_avatar.png";
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from "../../Sidebar/Sidebar";
import { getUserById ,approveUser } from "../../../../redux/actions/admin";
import { useLocation, useHistory } from "react-router-dom";
import { url } from "../../../../redux/api/index";
import "./Details.css";

function UserDetails() {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const id = (location.pathname.slice(13));
    
    useEffect(() => {
        dispatch(getUserById(id));
    }, [])
    
    const user = useSelector(state => state.admin?.adminData?.user);
    const approve = () => {
        dispatch(approveUser( id, history));
    };

  return (
    <>
    <Sidebar />
      <div class="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 ">
            <div className="py-3 bg-tertiaryColor">
              <div className="font-25 text-center mb-3 font-demi text-primaryColor">
                User Profile
              </div>
              <div class="text-center">
                {user && user.profilePicture=='test'? (
                <img src={userLogo} alt="img" class="mb-3 img-fluid user" />
                ): (
                    <img src={url+'/'+user?.profilePicture} alt="img" class="mb-3 img-fluid user" />
                )}
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
                    value={user?.fullName}
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
                      value={user?.email}
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
                      value={'+'+user?.phone}
                      className="form-control w-50"
                      placeholder="Contact Number"
                      disabled
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="input-group mt-2">
                    <div
                      className="form-control w-50"
                    >
                        Email Verified : {user?.isEmailVerified? (
                            <span className="text-green">True</span>
                        ): (
                            <span className="text-red">False</span>
                        )}
                    </div>
                  </div>
                  <div className="input-group mt-2 ml-3">
                  <div
                      className="form-control w-50"
                    >
                        Phone Verified : {user?.isNumberVerified? (
                            <span className="text-green">True</span>
                        ): (
                            <span className="text-red">False</span>
                        )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h2 className="ml-4 font-demi text-primaryColor">ID</h2>
        </div>
        {user && user.profilePicture != 'test' ? (
            <div className="row mt-3">
            <div className="col-lg-6 col-sm-12 col-12 col-md-6">
                <div className="card">
                <img
                    src={url+'/'+user.frontId}
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
                    src={url+'/'+user.backId}
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
        ) : (
            <div className="row mt-5">
            <h4 className="ml-4 font-demi text-primaryColor">Not Yet Submitted</h4>
          </div>
        )}
        {user && !user.isIdApproved ? (
          <div className="row mt-2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <div className="text-center mt-4">
                  <button className="text-white bg-secondaryColor font-demi btn-blue submit-button" onClick={approve}>
                      Approve
                  </button>
              </div>
            </div>
          </div>
        ) : ''}
      </div>
    </>
  );
}

export default UserDetails;
