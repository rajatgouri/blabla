import React, { useState }  from "react";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { makeStyles } from "@material-ui/core/styles";
import Table from '../Ride-Table/RideTable';
import './AllRides.css'

function Blogs() {
  const [showTable1, setShowTable1] = useState(true);
  const [status, setStatus] = useState('');
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
                    <div class="card-body w-100 d-flex">
                      <h5 class="card-title text-secondaryColor font-bold w-100">All Rides <i class="fa fa-filter" aria-hidden="true" onClick={()=>{
                        document.getElementById('basic-nav-dropdown2')?.click();
                      }} ></i>
                      <NavDropdown
                          eventKey={1}
                          id="basic-nav-dropdown2"
                        >
                        <NavDropdown.Item eventKey={1.3}>
                          <div 
                            className="font-demi text-primaryColor"
                            onClick={()=>{
                              setStatus('');
                            }}>
                            All
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey={1.3}>
                          <div 
                            className="font-demi text-primaryColor"
                            onClick={()=>{
                              setStatus('Scheduled');
                            }}>
                            Scheduled
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey={1.3}>
                        <div 
                            className="font-demi text-primaryColor"
                            onClick={()=>{
                              setStatus('Cancelled');
                            }}>
                            Cancelled
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey={1.3}>
                          <div 
                            className="font-demi text-primaryColor"
                            onClick={()=>{
                              setStatus('Ongoing');
                            }}>
                            Ongoing
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey={1.3}>
                        <div 
                            className="font-demi text-primaryColor"
                            onClick={()=>{
                              setStatus('Completed');
                            }}>
                            Completed
                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                      </h5>
                      <span className="text-secondaryColor font-bold dropdown-icon"></span>
                    </div>
                    {showTable1 ? (
                      <>
                        <hr className="all-hr" />
                        <Table status={status}></Table>
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
