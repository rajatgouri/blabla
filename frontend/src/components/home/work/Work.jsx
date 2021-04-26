import React from "react";
import customerOne from "../../../images/customerOne.svg";
import customerTwo from "../../../images/customerTwo.png";
import customerThree from "../../../images/customerThree.png";
import customerFour from "../../../images/customerFour.png";

function Work() {
  return (
    <>
      <div className="gradient-background">
        <div className="container py-section px-4">
          <h2 className="text-primaryColor font-bold sub-heading text-center">
            Our Happy Customers
          </h2>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 px-5 center">
              <img
                src={customerOne}
                alt="customer"
                className="img-fluid px-5 py-5"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 px-5 center">
              <img
                src={customerTwo}
                alt="customer"
                className="img-fluid px-5 py-5"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 px-5 center">
              <img
                src={customerThree}
                alt="customer"
                className="img-fluid px-5 py-5"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 px-5 center">
              <img
                src={customerFour}
                alt="customer"
                className="img-fluid px-5 py-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container py-section px-4">
          <h2 className="text-primaryColor font-bold sub-heading text-center mb-5">
            How it works
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="d-flex justify-content-center">
                <div
                  className="work-number text-primaryColor font-bold center"
                  style={{ fontSize: "35px" }}
                >
                  1
                </div>
              </div>
              <h4 className="text-primaryColor font-20 mt-3 font-bold text-center">
                Select a type of copy
              </h4>
              <p className="text-muted text-center font-demi mb-3 mt-2 font-16">
                Choose from headlines, blog intros, product descriptions, and
                much more.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="d-flex justify-content-center">
                <div
                  className="work-number text-primaryColor font-bold center"
                  style={{ fontSize: "35px" }}
                >
                  2
                </div>
              </div>
              <h4 className="text-primaryColor font-20 mt-3 font-bold text-center">
                Describe your product
              </h4>
              <p className="text-muted text-center font-demi mb-3 mt-2 font-16">
                Just enter the name of your company and 1-2 sentences on what
                you do.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="d-flex justify-content-center">
                <div
                  className="work-number text-primaryColor font-bold center"
                  style={{ fontSize: "35px" }}
                >
                  3
                </div>
              </div>
              <h4 className="text-primaryColor font-20 mt-3 font-bold text-center">
                Get your results and edit
              </h4>
              <p className="text-muted text-center font-demi mb-3 mt-2 font-16">
                You’ll get 10 results at a time, and you can run the tool again
                for more ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
