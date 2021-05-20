import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import { getMyRides } from "../../../redux/actions/ride";
import "./Home.css";
import RideCard from '../Ride-Card/RideCard';
import img from '../../../images/driver-home.svg';

function DriverHome() {
  const dispatch = useDispatch();
  let myRides = useSelector(state => state.ride?.rideData?.myRides);
  useEffect(() => {
    dispatch(getMyRides());
  }, [])
  return (
    <>
    <img src={img} className="home-image"></img>
      <div className="container home mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-2 col-12 mb-2 mt-2">
            <h5 className="text-secondaryColor">            
                <Link className="d-flex justify-content-end" to="/driver/add-ride">
                    <button className="bg-secondaryColor font-demi btn-blue text-white">
                        Add Ride <i className="fa fa-plus ml-1"></i>
                    </button>
                </Link>
                <span className="recent">
                    Recent Rides
                </span>
            </h5>
            { myRides && myRides.length>0 ? (
              myRides.map(r=>{
                return (
                  <RideCard ride={r} />
                )
              })
            ) : <span className="mb-5">No Rides Available</span>}
            <Link to="/driver/all-ride">
            <div className="text-center mt-5 mb-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                View All
                </button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverHome;
