import React,{ useEffect ,useState }  from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getVehicles , addRide } from "../../../redux/actions/ride";
import { useHistory } from "react-router-dom";
import { locations } from "../../../data/locations";

function AddRide() {
  const initialState = { from: "", to: "", date: "", time: "" , vehicle: "" , price: "" };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const submitRide = (e) => {
    e.preventDefault();
    dispatch(addRide(formData, history));
  }
  useEffect(() => {
    dispatch(getVehicles());
  }, [])

const vehicles = useSelector(state => state.ride?.rideData?.vehicles);
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Add Ride Info
              </h1>
              <form>
              <div className="d-flex">
              <div className="input-group mt-4 font-medium">
                <select
                      type="text"
                      className=""
                      name="from"
                      placeholder="Going From"
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      required
                    >
                      <option selected disabled>Going From</option>
                      {locations && locations.length>0 ? (
                        locations.map(v=>{
                          return (<option value={v.id}>{v.name}</option>)
                        })
                      )
                        : ''
                      } 
                  </select>
                </div>
                <div className="input-group mt-4 ml-3 font-medium">
                    <select
                      type="text"
                      className=""
                      placeholder="Going To"
                      name="to"
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      required
                    >
                      <option selected disabled>Going To</option>
                      {locations && locations.length>0 ? (
                        locations.map(v=>{
                          return (<option value={v.id}>{v.name}</option>)
                        })
                      )
                        : ''
                      } 
                  </select>
                </div>
              </div>
              <div className="d-flex">
                <div className="input-group mt-4">
                  <input
                    type="date"
                    className="form-control w-50"
                    placeholder="Date of Travel"
                    name="date"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="input-group mt-4 ml-3">
                  <input
                    type="time"
                    className="form-control w-50"
                    placeholder="Time of Travel"
                    name="time"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </div>
              <div className="d-flex">
              <div className="input-group mt-4 font-medium">
                <select
                    type="text"
                    className=""
                    placeholder="Select Vehicle"
                    name="vehicle"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                  >
                    <option selected disabled>Select Vehicle</option>
                    {vehicles && vehicles.length>0 ? (
                      vehicles.map(v=>{
                         return (<option value={v._id}>{v.modelName} ( {v.modelYear} )</option>)
                      })
                    )
                      : ''
                     } 
                  </select>
                </div>
                <div className="input-group mt-4 ml-3">
                  <input
                    type="number"
                    className="form-control w-50"
                    placeholder="Price Per Seat"
                    name="price"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                  />
                </div> 
              </div>            
                <div className="text-center mt-4">
                  <button className="text-white bg-secondaryColor font-demi btn-blue submit-button" onClick={(e)=>submitRide(e)}>
                    Add Ride
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRide;
