import React ,{ useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Features from "./Features/Features";
import Work from "./Work/Work";
import { isAuthenticated } from "../../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { locations } from "../../../data/locations";

function ClientHome() {
  const initialState = { from: "", to: "", date: ""};
  const [formData, setformData] = useState(initialState);
  const history = useHistory();
  let minDate = new Date();
  let dd = minDate.getDate();
  let mm = minDate.getMonth()+1;
  const yyyy = minDate.getFullYear();
  
  if ( dd < 10 ) { 
    dd = '0' + dd
  } 
  if ( mm < 10 ) {
    mm = '0' + mm
  } 
  
  minDate = yyyy + '-' + mm + '-' + dd;
  
  const checkRide = () => {
    if ( !formData.from.length || !formData.to.length || !formData.date.length ) {
      swal({
        text: `Please enter all values `,
        icon: "error",
      }); 
      return ;
    }
    localStorage.setItem("ride", JSON.stringify(formData));
    history.push("/client/ride");
  }
  
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row pt-10">
            <div className="col-lg-6 col-md-5 col-sm-12 col-12">
              <div className="card px-4">
                <h1 className="text-primaryColor font-bold main-heading">
                  Carpooling <br />
                  simplified.
                </h1>
                <p className="font-demi text-primaryColor home-para">
                  Introducing the end of carpool hassle.
                  <br />
                  With access to millions of journeys,
                  <br />
                  you can quickly find people nearby travelling your way
                  <br />
                  and book a ride within seconds.
                </p>
                {!isAuthenticated() ? (
                  <Link to="/driver/signup">
                    <div className="mobile-center">
                      <button className="home-button text-white font-demi py-2 px-4">
                        Become a driver &nbsp;&nbsp;&nbsp;
                                      <i className="fas fa-arrow-right text-white"></i>
                      </button>
                    </div>
                  </Link>
                ) : ''}
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-12 mb-5 mt-lg-0 mt-5">
              <div className="card bg-white py-5 px-lg-5 px-3 mx-lg-5 mx-4">
                <h4 className="font-bold font-20 text-primaryColor mobile-center">
                  Enter your location , destination and Date of travel
                </h4>
                <div className="mt-4">
                  <div>
                    <label className="text-muted font-demi font-18">
                      City From
                    </label>
                  </div>
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
                          return (<option value={v.name}>{v.name}</option>)
                        })
                      )
                        : ''
                      } 
                  </select>
                </div>
                <div className="mt-3">
                  <label className="text-muted font-demi font-18">
                    City To
                  </label>
                  <select
                      type="text"
                      className=""
                      name="to"
                      placeholder="Going To"
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
                          return (<option value={v.name}>{v.name}</option>)
                        })
                      )
                        : ''
                      } 
                  </select>
                </div>
                <div className="mt-3">
                  <label className="text-muted font-demi font-18">
                    Date of travel
                  </label>
                  <input
                    type="date"
                    className="form-control w-100"
                    placeholder="Date of Travel"
                    name="date"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    min={minDate}
                  />
                </div>
                <div className=" mt-4 mobile-center">
                  <button className="home-button text-white font-demi py-2 px-4" onClick={checkRide}>
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />

      <Work />

    </>
  );
}

export default ClientHome;
