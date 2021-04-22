import React from "react";

function Contact() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="card">
            <h1 className="text-center font-bold text-primaryColor mb-4">
            Verify your mobile number
            </h1>
            <form>
              <div className="input-group mt-4">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Phone"
                />
              </div>
              <div className="d-flex justify-content-between grey-hover mt-4 py-3 px-3">
                <div className="text-primaryColor font-demi font-18">
                  I will do it later                 
                </div>
                <i className="text-muted fas fa-chevron-right"></i>
              </div>
              <div className="text-center mt-5">
                <button className="text-white bg-secondaryColor font-demi btn-blue">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
