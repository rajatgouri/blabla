import React,{ useState, useEffect } from "react";
import "./reserve.css";
import { useLocation } from "react-router-dom";
import { url } from "../../../redux/api/index";
import { useDispatch , useSelector} from 'react-redux';
import { getRideById , confirmRide } from "../../../redux/actions/ride";

function ClientReserve() {
  const location = useLocation();
  const dispatch = useDispatch();
  const ride = useSelector(state => state.ride?.rideData?.ride);
  const driver =  useSelector(state => state.ride?.rideData?.driver);
  let totalBookings = 0
  ride?.bookings?.forEach(b=>{
    totalBookings = totalBookings+Number(b.seats);
  })
  const vehicle = driver?.vehicles?.filter(v=>v._id===ride?.vehicle)
  const query = new URLSearchParams(location.search)
  const id = query.get('ride');
  const [total, setTotal] = useState("");
  const [seat, setSeat] = useState(1);
  
  useEffect(async() => {
    if (id) {
      await dispatch(getRideById(id? id : ''));
    }
  },[])

  const confirm = () => {
    const formData = {
      id : id,
      total : total? total : ride?.price,
      seats: total? total/ride.price : 1
    }
    dispatch(confirmRide(formData));
  }
  
  return (
    <>
      {ride ? (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-2 col-12">
              <div className="card">
                <h2
                  className="card my-2 text-primaryColor text-center font-bold"
                  style={{ fontSize: "35px" }}
                >
                  {ride.date} &nbsp; {ride.time}
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
                        {ride.from}
                        <br />
                      </div>
                      <div></div>
                      <div style={{ marginTop: "45px" }} className="text-blue">
                        {ride.to} <br />
                      </div>
                    </div>
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
                {/* <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=gatineu%20mc%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                        <a href="https://soap2day-to.com"></a><br /><a href="https://www.embedgooglemap.net"></a>
                      </div>
                  </div>
                <hr className="grey-hr" /> */}
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Price per seat
                  </div>
                  <div className="text-primaryColor font-bold font-18">
                    &#36;{ride.price}
                  </div>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Carpooling Fee
                  </div>
                  <div className="text-primaryColor font-bold font-18">
                    &#36;500
                  </div>
                </div>
                <hr className="grey-hr" />
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Please enter the no of seats 
                  </div>
                  <div className="text-primaryColor font-bold font-18">
                    <input 
                      type="number" 
                      style={{width:"50px"}} 
                      max={Number(ride?.totalSeats) - totalBookings} 
                      min="1" 
                      value={seat}
                      onChange={(e)=>{
                        setSeat(e.target.value);
                        setTotal(e.target.value*ride.price)}
                        }></input>
                  </div>
                </div>
                <hr className="grey-hr" />
                <div className="d-flex justify-content-between px-3">
                  <div className="text-muted font-demi font-18">
                    Total Price
                  </div>
                  <div className="text-primaryColor font-bold font-18">
                  &#36;{total? Number(total) + 500 : Number(ride.price) + 500}
                  </div>
                </div>
                <hr className="grey-hr" />
              </div>
              <div className="text-center mt-4 mb-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue submit-button" onClick={confirm}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : ''}
    </>
  );
}

export default ClientReserve;
