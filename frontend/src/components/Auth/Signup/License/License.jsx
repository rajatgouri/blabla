import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./License.css";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function License() {
  const [fileOne, setFileOne] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const [value, setValue] = useState(false);
  const [photo, setPhoto] = useState("");
  function handleTakePhoto(dataUri) {
    dataUri && setValue(false);
    setPhoto(dataUri);
  }  
  return (
    <>    
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Please upload your ID
              </h1>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Front side of the ID
                      </p>
                      <div className="input-group file-container">
                      {fileOne ? <div className="image-container"><img src={fileOne} className="img-fluid w-100 h-100 p-4" style={{background: '#e0f6ff', borderRadius: '10px'}}/> </div> : <input
                          type="file"
                          value=""
                          onChange={(e) => setFileOne(URL.createObjectURL(e.target.files[0]))}
                          className="form-control-upload custom-file-input"
                          style={{ height: "200px" , width: "220px" }}
                        />}
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Back side of the ID
                      </p>
                      <div className="input-group file-container">
                      {fileTwo ? <div className="image-container"><img src={fileTwo} className="img-fluid w-100 h-100 p-4" style={{background: '#e0f6ff', borderRadius: '10px'}}/></div> : <input
                          type="file"
                          value=""
                          onChange={(e) => setFileTwo(URL.createObjectURL(e.target.files[0]))}
                          className="form-control-upload custom-file-input"
                          style={{ height: "200px" , width: "220px" }}
                        />}
                        <i className="fa fa-upload"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(!value);
                    }}
                    className="text-white bg-secondaryColor font-demi btn-blue mt-4"
                  >
                    Take your photo
                  </button>
                </div>
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
                {value ? (
                  <div className="mt-4 d-flex justify-content-center">
                    <Camera
                      onTakePhoto={(dataUri) => {
                        handleTakePhoto(dataUri);
                      }}
                    />
                  </div>
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

export default License;
