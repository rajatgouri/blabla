import React ,{ useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllRides.css";
import RideCard from '../Ride-Card/RideCard';
import { useDispatch , useSelector} from 'react-redux';
import { getMyRides } from "../../../redux/actions/ride";
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
                <span className="recent">
                    All Rides
                </span>
            </h5>
            { myRides && myRides.length>0 ? (
              myRides.map(r=>{
                return (
                  <RideCard ride={r} />
                )
              })
            ) : ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverHome;
