import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import avatar from "../../../images/profile_avatar.png";
import Table from './User-Table/UserTable';

function User() {

  const [showTable1, setShowTable1] = useState(true);
  const handleShow1 = () => setShowTable1(!showTable1);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Sidebar>
        <main className={classes.content}>
          {/* <div class="container">
          <div class="row mb-5 mt-3">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card font-regular">
                <img
                  src={avatar}
                  alt=""
                  className="img-fluid card-img-top ml-3"
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Full Name : Alpha Beta
                  </h5>
                  <p class="grey-colored-text-18">
                    Driver
                  </p>
                  <button class="btn btn-success">Approve</button>
                  <button class="btn btn-danger ml-3">Reject</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card font-regular">
                <img
                  src={avatar}
                  alt=""
                  className="img-fluid card-img-top ml-3"
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Full Name : Alpha Beta
                  </h5>
                  <p class="grey-colored-text-18">
                    Client
                  </p>
                  <button class="btn btn-success">Approve</button>
                  <button class="btn btn-danger ml-3">Reject</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card font-regular">
                <img
                  src={avatar}
                  alt=""
                  className="img-fluid card-img-top ml-3"
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                  }}
                />
                <div class="card-body">
                  <h5 class="text-dark font-weight-bold mt-2">
                    Full Name : Alpha Beta
                  </h5>
                  <p class="grey-colored-text-18">
                    Driver
                  </p>
                  <button class="btn btn-success">Approve</button>
                  <button class="btn btn-danger ml-3">Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

          <div class="container">
            <>
              <div class="row mb-1 col-12">
                <div class="card w-100 mb-5">
                  <div class="card-body w-100 d-flex justify-content-between">
                    <h5 class="card-title text-secondaryColor font-bold w-100">All Users</h5>
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

export default User;
