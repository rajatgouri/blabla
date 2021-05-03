import React, { useState }  from "react";
import "./RideDetails.css";
import Sidebar from "../Sidebar/Sidebar";
import { Modal } from "react-bootstrap";

function DriverRideDetails() {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  return (
    <>
    <Sidebar>
    {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">
                Process Refund
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="w-100 h-100">
          <form>
                <div className="form-group">
                  <input
                    name="title"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Select User"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="title"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Refund Amount"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="title"
                    className="form-control mt-3 mb-4"
                    id="exampleFormControlInput1"
                    placeholder="Reason for refund"
                    required
                  />
                </div>
                <div className="text-center mt-4 mb-5">
                    <button className="text-white bg-secondaryColor font-demi btn-blue" onClick={handleClose}>
                        Process Refund
                    </button>
                </div>
              </form>
          </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-2 col-12">
            <div className="card">
              <h2
                className="card my-2 text-primaryColor text-center font-bold"
                style={{ fontSize: "35px" }}
              >
                Fri, 30 April
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
                      MONTREAL
                      <br />
                      <div className="font-regular">
                        metro Namur Autoroute 50
                      </div>
                    </div>
                    <div></div>
                    <div style={{ marginTop: "18px" }} className="text-blue">
                      GATINEAU <br />
                      <div className="font-regular">
                        McDonald's, Alumettieres et Maisonneuve
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="mapouter">
                  <div className="gmap_canvas">
                      <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=gatineu%20mc%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                      </iframe>
                      <a href="https://soap2day-to.com"></a><br /><a href="https://www.embedgooglemap.net"></a>
                    </div>
                </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Started at
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  9:45 AM
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18 mt-2">
                  Ended at
                </div>
                <div className="text-primaryColor font-bold font-18 mt-2">
                  4:45 PM
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Price per seat
                </div>
                <div className="text-primaryColor font-bold font-18">
                  &#36;540.00
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Total seats Provided
                </div>
                <div className="text-primaryColor font-bold font-18">
                  4
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Seats Booked
                </div>
                <div className="text-primary font-bold font-18">
                  3
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Seats that were vacant
                </div>
                <div className="text-danger font-bold font-18">
                  1
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Total Driver Earnings
                </div>
                <div className="text-green font-bold font-18">
                &#36;1620.00
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Driver
                </div>
                <div className="text-muted font-bold font-18">
                Mark Zender 
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Feedback
                </div>
                <div className="text-green font-bold font-18">
                4.5 <i class="fas fa-star text-green"></i>
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Passenger
                </div>
                <div className="text-muted font-bold font-18">
                Choloe Garcines 
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Feedback
                </div>
                <div className="text-green font-bold font-18">
                 5 <i class="fas fa-star text-green"></i>
                </div>  
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Passenger
                </div>
                <div className="text-muted font-bold font-18">
                Florence Payong 
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Feedback
                </div>
                <div className="text-red font-bold font-18">
                 2 <i class="fas fa-star text-red"></i>
                </div>  
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Passenger 
                </div>
                <div className="text-muted font-bold font-18">
                Chardine Chamacho 
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Feedback
                </div>
                <div className="text-yellow font-bold font-18">
                 3.5 <i class="fas fa-star text-yellow"></i>
                </div>  
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3">
                <div className="text-muted font-demi font-18">
                  Comission per seat
                </div>
                <div className="text-primaryColor font-bold font-18">
                  &#36;200.00
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mb-5">
                <div className="text-muted font-demi font-18">
                  My Total Earnings
                </div>
                <div className="text-green font-bold font-18">
                &#36;600.00
                </div>
              </div>
            </div>
            <div className="text-center mt-4 mb-5">
            <button className="text-white bg-secondaryColor font-demi btn-blue" onClick={handleShow}>
                Process Refund
            </button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
    
    </>
  );
}

export default DriverRideDetails;
