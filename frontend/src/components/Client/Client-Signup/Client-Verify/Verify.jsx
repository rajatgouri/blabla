import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Verify.css";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Modal } from "react-bootstrap";
import Profile from "../../../../images/profile_avatar.png";

function ClientVerify() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fileOne, setFileOne] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const [value, setValue] = useState(false);
  const [photo, setPhoto] = useState(Profile);
  function handleTakePhoto(dataUri) {
    dataUri && setValue(false);
    setPhoto(dataUri);
  }
  const handleIcon = (e) => {
    e.preventDefault();
    document.getElementById("upload")?.click();
  };
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Please upload your ID and Photograph
              </h1>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Front side of the ID
                      </p>
                      <div className="input-group file-container">
                        {fileOne ? (
                          <div className="image-container">
                            <img
                              src={fileOne}
                              className="img-fluid w-100 h-100 p-4"
                              style={{
                                background: "#e0f6ff",
                                borderRadius: "10px",
                              }}
                            />{" "}
                          </div>
                        ) : (
                          <input
                            type="file"
                            id="front-upload"
                            value=""
                            onChange={(e) =>
                              setFileOne(URL.createObjectURL(e.target.files[0]))
                            }
                            className="form-control-upload custom-file-input mx-5 my-4"
                            style={{ height: "250px" }}
                          />
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("front-upload")?.click();
                          }}
                          className="d-flex justify-content-center w-100 text-primaryColor custom-upload-button"
                        >
                          <i className="fas fa-3x fa-upload"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Back side of the ID
                      </p>
                      <div className="input-group file-container">
                        {fileTwo ? (
                          <div className="image-container">
                            <img
                              src={fileTwo}
                              className="img-fluid w-100 h-100 p-4"
                              style={{
                                background: "#e0f6ff",
                                borderRadius: "10px",
                              }}
                            />
                          </div>
                        ) : (
                          <input
                            type="file"
                            id="back-upload"
                            value=""
                            onChange={(e) =>
                              setFileTwo(URL.createObjectURL(e.target.files[0]))
                            }
                            className="form-control-upload custom-file-input mx-5 mt-4"
                            style={{ height: "250px" }}
                          />
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("back-upload")?.click();
                          }}
                          className="d-flex justify-content-center w-100 text-primaryColor custom-upload-button"
                        >
                          <i className="fas fa-3x fa-upload"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center"
                  style={{marginLeft : "35%" , borderRadius: "10px"}}>
                  <div className="file-container col-6 pt-1 mt-5" style={{borderRadius: "10px"}}> 
                    {photo ? (
                      <div className="mt-4 text-center">
                        <img
                          src={photo}
                          className="img-fluid"
                          style={{
                            borderRadius: "50%",
                            height: "250px",
                            width: "250px",
                          }}
                        />
                      </div>
                      ) : (
                        ""
                      )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleShow();
                      setValue(!value);
                    }}
                    className="text-white bg-secondaryColor font-demi btn-blue mt-4"
                    style={{outline: 'none' ,width: "40%"}}
                  >
                    <i class="fa fa-camera" aria-hidden="true"></i>
                  </button>
                  </div>
                </div>

                {value ? (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <div className="font-bold text-primaryColor">
                          Click your picture
                        </div>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="w-100 h-100">
                        <Camera
                          onTakePhoto={(dataUri) => {
                            handleTakePhoto(dataUri);
                          }}
                        />
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : (
                  ""
                )}

                <Link to="/">
                  <div className="text-center mt-5">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Submit
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientVerify;
