import React, { useEffect }  from "react";
import "./RideDetails.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";
import { getAdminRide } from "../../../redux/actions/admin";


function DriverRideDetails() {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  const id = query.get('id');
  const dispatch = useDispatch();
    
  useEffect(() => {
      dispatch(getAdminRide(id));
  }, [])
  
  const ride = useSelector(state => state.admin?.adminData?.adminRide);
  let totalBookings = 0
  ride?.bookings?.forEach(b=>{
    totalBookings = totalBookings+Number(b.seats);
  })
  return (
    <>
    <Sidebar>
      { ride?  (
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7 col-md-8 col-sm-2 col-12">
          <div className="card">
            <h2
              className="card my-2 text-primaryColor text-center font-bold"
              style={{ fontSize: "35px" }}
            >
              {ride.date}
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
            <div className="d-flex justify-content-between px-3">
              <div className="text-muted font-demi font-18">
                Driver
              </div>
              <div className="text-muted font-bold font-18">
              {ride.driverName} 
              </div>
            </div>
            {ride?.bookings?.map(b=>{
              return (
                <>
                <hr className="grey-hr" />
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Passenger
                  </div>
                  <div className="text-muted font-bold font-18">
                  {b.clientName}
                  </div>
                </div>
                </>
              )
            })}
            <hr className="grey-hr" />
            <div className="d-flex justify-content-between px-3 mb-5">
              <div className="text-muted font-demi font-18">
                My Total Earnings
              </div>
              <div className="text-green font-bold font-18">
              {ride.bookings.length * 500}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      ): ''}
    </Sidebar>
    
    </>
  );
}

export default DriverRideDetails;
