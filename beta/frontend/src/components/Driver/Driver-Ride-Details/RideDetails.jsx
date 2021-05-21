import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { getRideById , startRideById , endRideById , cancelRideById } from "../../../redux/actions/ride";
import swal from "sweetalert";
import "./RideDetails.css";

function DriverRideDetails() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const ride = useSelector(state => state.ride?.rideData?.ride);
  const driver =  useSelector(state => state.ride?.rideData?.driver);
  let totalBookings = 0
  ride?.bookings?.forEach(b=>{
    totalBookings = totalBookings+Number(b.seats);
  })
  const vehicle = driver?.vehicles?.filter(v=>v._id===ride?.vehicle);
  const query = new URLSearchParams(location.search)
  const id = query.get('id');

  const startRide = () => {
    const presentDate = new Date();
    const startDate = new Date(ride?.date);
    const mm = (startDate.getMonth() - presentDate.getMonth());
    const days = (startDate.getDate() - presentDate.getDate());
    const hh = (Number(ride?.time.slice(0,2))-presentDate.getHours());
    const minutes = (Number(ride?.time.slice(3,5))-presentDate.getMinutes());
    if (mm>1) {
      swal({
        text: "You need to wait " + mm + " months before starting.",
        icon: "info",
      });
      return;
    } else if(days>1) {
      swal({
        text: "You need to wait " + days + " days before starting.",
        icon: "info",
      });
      return;
    } else if(hh>1) {
      swal({
        text: "You need to wait " + hh + " hours " + minutes + " minutes before starting.",
        icon: "info",
      });
      return;
    } else if(hh>0) {
      swal({
        text: "You need to wait " + minutes + " minutes before starting.",
        icon: "info",
      });
      return;
    } else {
      dispatch(startRideById(id? id : '', String(presentDate.getHours()) + ':' + String(presentDate.getMinutes()) , history))
    }
  }

  const cancelRide = () => {
    const presentDate = new Date();
    const startDate = new Date(ride?.date);
    const mm = (startDate.getMonth() - presentDate.getMonth());
    const days = (startDate.getDate() - presentDate.getDate());
    const hh = (Number(ride?.time.slice(0,2))-presentDate.getHours());
    const minutes = (Number(ride?.time.slice(3,5))-presentDate.getMinutes());
    console.log(days);
    if (mm>=1) {
      dispatch(cancelRideById(id? id : '', history));
      return;
    } else if(days>=1) {
      dispatch(cancelRideById(id? id : '', history));
      return;
    } else if(hh>=10) {
      dispatch(cancelRideById(id? id : '', history));
      return;
    } else {
      swal({
        text: "You need to contact support for cancelling!",
        icon: "info",
      });
      return;
    }
  }

  const endRide = () => {
    const presentDate = new Date();
    dispatch(endRideById(id? id : '', String(presentDate.getHours()) + ':' + String(presentDate.getMinutes()) , history))
  }
  
  useEffect(() => {
    if (id) {
      dispatch(getRideById(id? id : ''));
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
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Vehicle
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  {vehicle ? (<>{vehicle[0]?.modelName} ( {vehicle[0]?.modelYear} )</>) : '' }
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
                    Total seats Provided
                  </div>
                  <div className="text-primaryColor font-bold font-18">
                    {ride?.totalSeats}
                  </div>
                </div>
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Seats Booked
                  </div>
                  <div className="text-primary font-bold font-18">
                    {totalBookings? totalBookings : 0}
                  </div>
                </div>
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Vacant Seats
                  </div>
                  <div className="text-danger font-bold font-18">
                    {totalBookings? Number(ride?.totalSeats) - totalBookings : ride?.totalSeats}
                  </div>
                </div>
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Total Earnings
                  </div>
                  <div className="text-green font-bold font-18">
                  &#36;{totalBookings ? totalBookings*Number(ride?.price) : 0}
                  </div>
                </div>
                <hr className="grey-hr" />
                  {ride && ride?.status == "Scheduled" ? (
                  <div className="text-center mt-4 mb-5 d-flex justify-content-center">
                    <button
                      className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                      onClick={startRide}
                    >
                      Start Ride
                    </button>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <button
                      className="text-white bg-danger font-demi btn-blue submit-button "
                      onClick={cancelRide}
                    >
                      Cancel Ride
                    </button>
                  </div>
                  ) : ''}
                {ride && ride?.status == "Ongoing" ? (
                  <div className="text-center mt-4 mb-5 d-flex justify-content-center">
                    <button
                      className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                      onClick={endRide}
                    >
                      End Ride
                    </button>
                  </div>
                ) : ''}
                  {ride && ride?.status == "Completed" ? (
                    <span className="mb-5">&nbsp;</span>
                  ) : ''}
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
