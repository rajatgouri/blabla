import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ride.css";
import { useDispatch } from 'react-redux';
import { getRides } from "../../../redux/actions/ride";
import { useSelector } from 'react-redux';

function ClientRide() {
  const dispatch = useDispatch();
  let rides = useSelector(state => state.ride?.rideData?.rides);
  rides = rides?.filter(r=>{
    let totalBookings = 0
    r?.bookings?.forEach(b=>{
      totalBookings = totalBookings+Number(b.seats);
    })
    if(totalBookings<r?.totalSeats) {
      return r;
    }
  })
  rides = rides?.map(r=>{
    let totalBookings = 0;
    if (r) {
      r?.bookings?.forEach(b=>{
        totalBookings = totalBookings+Number(b.seats);
      })
    }
    return {
      ...r,
      totalBookings : totalBookings
    }
  });
  const searchData = JSON.parse(localStorage.getItem("ride"));
  useEffect(() => {
    dispatch(getRides(searchData));
  }, [])
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-12 col-12">
            <div className="card">
              <div className="card my-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-2x fa-search"></i>
                    </span>
                  </div>
                  <span
                    type="text"
                    className="text-primaryColor font-demi font-18 ride-text"
                  >
                    {searchData.from} <span className="font-regular">to </span>
                    <span className="font-demi">{searchData.to}</span>
                    <br />
                    <span className="text-muted font-demi font-16">
                      {searchData.date}
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="text-muted font-18 font-medium mt-4 pl-2"
                style={{ letterSpacing: "-0.5px" }}
              >
                {searchData.from} &nbsp;<i className="fas fa-arrow-right"></i>&nbsp;
                {searchData.to}:
                <br />{rides? rides.length : 0} rides available
              </div>
              { rides && rides.length>0 ? (
                rides.map(ride=>{
                  return (
                    <div
                      className="card mt-4 ride-card text-primaryColor font-medium p-3 font-18"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                          <div className="font-bold text-green">{ride.time}</div>
                          <hr className="my-2" />
                          <div className="row my-3">
                            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                              <div className="circle-ride-from"></div>
                              <div className="line-ride-client"></div>
                              <div className="circle-ride-to"></div>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 col-10 px-0">
                              <div
                                style={{ marginTop: "-6px" }}
                                className="text-orange"
                              >
                                {ride.from}
                                <br />
                                {/* <div className="font-regular">
                                  metro Namur Autoroute 50
                                </div> */}
                              </div>
                              <div></div>
                              <div
                                style={{ marginTop: "18px" }}
                                className="text-blue"
                              >
                                {ride.to} <br />
                                {/* <div className="font-regular">
                                  McDonald's, Alumettieres et Maisonneuve
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4 text-primaryColor font-bold">
                          <div className="d-flex justify-content-end text-muted">
                            &#36;{ride.price}
                          </div>
                          <div className="mt-2 d-flex justify-content-end text-red">
                            {[...Array(Number(ride.totalSeats)-Number(ride.totalBookings))].map((x, i) =>(
                              <><i className="fas fa-male"></i>&nbsp;</>
                            ))}
                            {/* <i className="fas fa-male"></i>&nbsp;
                            <i className="fas fa-male"></i>&nbsp;
                            <i className="fas fa-male"></i>&nbsp;
                            <i className="fas fa-male"></i> */}
                          </div>
                          
                          <Link to={"/client/reserve?ride="+ride._id}>
                            <div className="text-center mt-2 d-flex justify-content-end">
                              <button
                                className="text-white bg-secondaryColor font-demi rounded"
                                style={{ border: "none" }}
                              >
                                Reserve
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : ''}
            </div>

            <Link to="/">
              <div className="text-center mt-4 mb-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue submit-button">
                  Change your ride
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientRide;
