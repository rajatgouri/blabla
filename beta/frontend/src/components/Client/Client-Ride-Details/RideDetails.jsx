import React,{useEffect} from "react";
import { url } from "../../../redux/api/index";
import { useLocation } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode";
import { getRideById } from "../../../redux/actions/ride";
import "./RideDetails.css";

function DriverRideDetails() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const ride = useSelector(state => state.ride?.rideData?.ride);
  const driver =  useSelector(state => state.ride?.rideData?.driver);
  const user = jwt(localStorage.getItem("token"));
  let myBookings = 0
  if (user && ride) {
    ride?.bookings?.forEach(b=>{
      if (b.client == user.id) {
        myBookings = myBookings+Number(b.seats);
      }
    })
  }
  const vehicle = driver?.vehicles?.filter(v=>v._id===ride?.vehicle);
  const query = new URLSearchParams(location.search)
  const id = query.get('id');

  useEffect(async() => {
    if (id) {
      await dispatch(getRideById(id? id : ''));
    }
  },[])

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
                {ride?.date} {ride?.time}
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
                  <div className="col-lg-11 col-md-11 col-sm-10 col-10 px-0">
                    <div style={{ marginTop: "-6px" }} className="text-orange">
                      {ride?.from}
                      <br />
                      {/* <div className="font-regular">
                        metro Namur Autoroute 50
                      </div> */}
                    </div>
                    <div></div>
                    <div style={{ marginTop: "45px" }} className="text-blue">
                      {ride?.to} <br />
                      {/* <div className="font-regular">
                        McDonald's, Alumettieres et Maisonneuve
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <hr className="grey-hr" />
              <div className="mapouter">
                  <div className="gmap_canvas">
                      <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=gatineu%20mc%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                      </iframe>
                      <a href="https://soap2day-to.com"></a><br /><a href="https://www.embedgooglemap.net"></a>
                    </div>
                </div> */}
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Scheduled at
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  {ride?.time}
                </div>
              </div>
              <hr className="grey-hr" />
                { driver? (
                <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                 <img src={url+'/'+driver?.profilePicture} class="profile-driver" ></img>
                </div>
                <div className="text-primaryColor font-bold font-18 custom-line">
                  <span>{driver?.fullName}</span><br></br>
                  <span>{vehicle ? vehicle[0]?.modelName : ''}</span><br></br>
                  <span>( {vehicle ? vehicle[0]?.modelYear : ''} )</span><br></br>
                </div>
              </div>
                ) : ''}
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Contact Number
              </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  +{driver?.phone}
              </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Status
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  {ride?.status == "Cancelled" ? (
                    <span className="text-danger">Cancelled</span>
                  ) : ''}
                  {ride?.status == "Scheduled" ? (
                    <span className="text-yellow">Scheduled</span>
                  ) : ''}
                  {ride?.status == "Ongoing" ? (
                    <span className="text-primary">Ongoing</span>
                  ) : ''}
                  {ride?.status == "Completed" ? (
                    <span className="text-success">Completed</span>
                  ) : ''}
                </div>
              </div>
              { ride?.startedAt ? (
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18 mt-2">
                    Started at
                </div>
                  <div className="text-primaryColor font-bold font-18 mt-2">
                    {ride?.startedAt}
                </div>
                </div>
              ) : ''}
              { ride?.endedAt ? (
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18 mt-2">
                    Ended at
                </div>
                  <div className="text-primaryColor font-bold font-18 mt-2">
                   {ride?.endedAt}
                </div>
                </div>
              ) : ''}
              {ride?.status != "Cancelled" ? (
                <>
                  <hr className="grey-hr" />
                  <div className="d-flex justify-content-between px-3">
                    <div className="text-muted font-demi font-18">
                      Price per seat
                    </div>
                    <div className="text-primaryColor font-bold font-18">
                      &#36;{ride?.price}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Total seats Booked
                  </div>
                  <div className="text-primaryColor font-bold font-18">
                    {myBookings}
                  </div>
                </div>
                <div className="d-flex justify-content-between px-3 mb-5">
                  <div className="text-muted font-demi font-18">
                    Total
                  </div>
                  <div className="text-green font-bold font-18">
                  &#36;{myBookings ? myBookings*Number(ride?.price) : 0}
                  </div>
                </div>              
            </>
              ) : (
                <span className="mb-5">&nbsp;</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverRideDetails;
