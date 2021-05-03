import React, { useState }  from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from '../Ride-Table/RideTable';
import RideDetails from "../Admin-Ride-Details/RideDetails";
import './AllRides.css'

function Blogs() {
  const [showTable1, setShowTable1] = useState(true);
  const handleShow1 = () => setShowTable1(!showTable1);
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
      <Sidebar >
      <main className={classes.content}>        
        <div class="container">
              <>
                <div class="row mb-1 col-12">
                  <div class="card w-100 mb-5">
                    <div class="card-body w-100 d-flex justify-content-between">
                      <h5 class="card-title text-secondaryColor font-bold w-100">All Rides</h5>
                      <span className="text-secondaryColor font-bold dropdown-icon"></span>
                    </div>
                    {showTable1 ? (
                      <>
                        <hr className="all-hr" />
                        <Table ongoing={false}></Table>
                      </>
                      ) : (
                        ""
                      )}
                  </div>
              </div>
              </>
        </div>
      </main>
      </Sidebar>
      
    </div>
  );
}

export default Blogs;
