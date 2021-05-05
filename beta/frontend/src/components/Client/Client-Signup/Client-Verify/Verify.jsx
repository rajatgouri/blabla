import React, { useState } from "react";
import "./Verify.css";
import Camera from "react-html5-camera-photo";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { verifyClientId } from "../../../../actions/auth";
import "react-html5-camera-photo/build/css/index.css";
import { Modal } from "react-bootstrap";
import Profile from "../../../../images/profile_avatar.png";
import { Stepper } from "react-form-stepper";
import swal from "sweetalert";
import "../Signup.css";

function ClientVerify() {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = { profilePicture: "", frontId: "", backId: ""};
  const [formData, setformData] = useState(initialState);

  const [showFileOne, setShowFileOne] = useState(false);
  const [showFileTwo, setShowFileTwo] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  const handleClose = () => setShowPhoto(false);
  const handleShow = () => setShowPhoto(true);

  const [fileOne, setFileOne] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const [photo, setPhoto] = useState(Profile);

  const [value, setValue] = useState(false);
  const [fileOneValue, setFileOneValue] = useState(false);
  const [fileTwoValue, setFileTwoValue] = useState(false);

  function handleTakePhoto(dataUri) {
    dataUri && setValue(false);
    setPhoto(dataUri);
  }

  function handleDocumentFront(dataUri) {
    dataUri && setFileOneValue(false);
    setFileOne(dataUri);
  }

  function handleDocumentBack(dataUri) {
    dataUri && setFileTwoValue(false);
    setFileTwo(dataUri);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.backId && formData.frontId && formData.profilePicture) {
      dispatch(verifyClientId(formData,history));
    } else {
      swal({
        text: "Please enter all photos",
        icon: "info",
      });
    }
  };

  return (
    <>
      <div className="verify container my-5">
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-lg-10 col-sm-12 col-md-12 col-12 font-regular px-0">
            <Stepper
              steps={[
                { label: "Step 1" },
                { label: "Step 2" },
                { label: "Step 3" },
              ]}
              connectorStateColors={true}
              className="text-primaryColor"
              connectorStyleConfig={{
                activeColor: "#1e4c6b",
                completedColor: "#1e4c6b",
                disabledColor: "#bdbdbd",
                size: 1,
                stepSize: "0em",
              }}
              styleConfig={{
                activeBgColor: "#00AFF5",
                completedBgColor: "#1e4c6b",
                labelFontSize: "1rem",
                circleFontSize: "1rem",
                size: "3em",
                fontWeight: 900,
              }}
              activeStep={2}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Please upload your ID and Photograph
              </h1>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card photo-card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Front side of the ID
                      </p>
                      <div className="input-group file-container">
                        {fileOneValue ? (
                          <Modal
                            show={showFileOne}
                            onHide={() => {
                              setShowFileOne(false);
                            }}
                          >
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
                                    setformData({
                                      ...formData,
                                      ["frontId"]: dataUri,
                                    });
                                    handleDocumentFront(dataUri);
                                  }}
                                />
                              </div>
                            </Modal.Body>
                          </Modal>
                        ) : (
                          ""
                        )}
                        {fileOne ? (
                          <div className="verify-image-container">
                            <img
                              src={fileOne}
                              className="img-fluid w-100 h-100 p-4"
                              style={{
                                background: "#e0f6ff",
                                borderRadius: "10px",
                              }}
                            />
                          </div>
                        ) : (
                          <div
                            className="form-control-upload custom-file-input mx-5 my-4"
                            style={{ height: "175px" }}
                          ></div>
                        )}
                        <div className="w-100 h-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setFileOneValue(!fileTwoValue);
                              setFileOne("");
                              setShowFileOne(true);
                            }}
                            className="d-flex justify-content-center w-100 text-primaryColor custom-upload-button"
                          >
                            <i
                              className="fas fa-3x fa-camera"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card photo-card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Back side of the ID
                      </p>
                      <div className="input-group file-container">
                        {fileTwoValue ? (
                          <Modal
                            show={showFileTwo}
                            onHide={() => {
                              setShowFileTwo(false);
                            }}
                          >
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
                                  onTakePhoto={(dataUri,e) => {
                                    setformData({
                                      ...formData,
                                      ["backId"]: dataUri,
                                    });
                                    handleDocumentBack(dataUri);
                                  }}
                                />
                              </div>
                            </Modal.Body>
                          </Modal>
                        ) : (
                          ""
                        )}
                        {fileTwo ? (
                          <div className="verify-image-container">
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
                          <div
                            className="form-control-upload custom-file-input mx-5 my-4"
                            style={{ height: "175px" }}
                          ></div>
                        )}
                        <div className="w-100 h-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setFileTwoValue(!fileTwoValue);
                              setFileTwo("");
                              setShowFileTwo(true);
                            }}
                            className="d-flex justify-content-center w-100 text-primaryColor custom-upload-button"
                          >
                            <i
                              class="fas fa-3x fa-camera"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div
                      className="text-center"
                      style={{ borderRadius: "10px" }}
                    >
                      <div
                        className="file-container  pt-1 mt-5"
                        style={{ borderRadius: "10px" }}
                      >
                        {photo ? (
                          <div className="mt-4 text-center">
                            <img
                              src={photo}
                              className="img-fluid"
                              style={{
                                borderRadius: "50%",
                                height: "175px",
                                width: "175px",
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
                          style={{ outline: "none", width: "40%" }}
                        >
                          <i className="fa fa-camera" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>

                {value ? (
                  <Modal show={showPhoto} onHide={handleClose}>
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
                            setformData({
                              ...formData,
                              ["profilePicture"]: dataUri,
                            });
                            handleTakePhoto(dataUri);
                          }}
                        />
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : (
                  ""
                )}

                <div className="text-center mt-5">
                  <button className="text-white bg-secondaryColor font-demi btn-blue" onClick={handleSubmit}>
                    Submit
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

export default ClientVerify;
