import React, { useState }  from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from '../Ride-Table/RideTable';
import RideDetails from "../Admin-Ride-Details/RideDetails";
import './Ongoing.css'

function Blogs() {
  const [showTable1, setShowTable1] = useState(true);
  const handleShow1 = () => setShowTable1(!showTable1);
  const [showTable2, setShowTable2] = useState(false);
  const handleShow2 = () => setShowTable2(!showTable2);
  const [showTable3, setShowTable3] = useState(false);
  const handleShow3 = () => setShowTable3(!showTable3);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },    
    content: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <main className={classes.content}>        
        <div class="container">
              <>
                <div class="row mb-1 col-12">
                  <div class="card w-100 mb-5">
                    <div class="card-body w-100 d-flex justify-content-between">
                      <h5 class="card-title text-green font-bold w-100">Ongoing Rides</h5>
                      <span className="text-secondaryColor font-bold dropdown-icon"></span>
                    </div>
                    {showTable1 ? (
                      <>
                        <hr className="ongoing-hr" />
                        <Table ongoing={true}></Table>
                      </>
                      ) : (
                        ""
                      )}
                  </div>
                {/* <div class="row mb-1 col-4">
                <h3 className="text-secondaryColor">Completed Rides</h3>
                  <RideCard handleShow={handleShow}/>
                  <RideCard handleShow={handleShow} />
                  <RideCard handleShow={handleShow}/>
                  <RideCard handleShow={handleShow} />
                </div>
                <div class="row mb-1 col-4">
                <h3 className="text-secondaryColor">Scheduled Rides</h3>
                  <RideCard handleShow={handleShow}/>
                  <RideCard handleShow={handleShow} />
                  <RideCard handleShow={handleShow}/>
                  <RideCard handleShow={handleShow} />
                </div>
                <div class="row mb-1 col-4">
                <h3 className="text-secondaryColor">Ongoing Rides</h3>
                  <RideCard handleShow={handleShow}/>
                  <RideCard handleShow={handleShow} />
                  <RideCard handleShow={handleShow}/>
                  <RideCard handleShow={handleShow} />
                </div> */}
              </div>
              {/* <div class="row mb-1 col-12">
                  <div class="card shadow w-100 category-card mb-5">
                    <div class="card-body w-100 d-flex justify-content-between">
                      <h5 class="card-title text-green font-bold w-100">Ongoing Rides</h5>
                      <span className="text-secondaryColor font-bold dropdown-icon"><i class="fa fa-caret-down font-25" onClick={handleShow2} aria-hidden="true"></i></span>
                    </div>
                    {showTable2 ? (
                      <>
                        <hr className="ongoing-hr" />
                        <Table></Table>
                      </>
                      ) : (
                        ""
                      )}
                  </div>
              </div>
              <div class="row mb-1 col-12">
                  <div class="card shadow w-100 category-card mb-5">
                    <div class="card-body w-100 d-flex justify-content-between">
                      <h5 class="card-title text-danger font-bold w-100">Cancelled Rides</h5>
                      <span className="text-secondaryColor font-bold dropdown-icon"><i class="fa fa-caret-down font-25" onClick={handleShow3} aria-hidden="true"></i></span>
                    </div>
                    {showTable3 ? (
                      <>
                        <hr className="cancelled-hr" />
                        <Table></Table>
                      </>
                      ) : (
                        ""
                      )}
                  </div>
              </div> */}
              </>
        </div>
      </main>
    </div>
  );
}

export default Blogs;
