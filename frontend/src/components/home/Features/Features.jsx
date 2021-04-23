import React from "react";

function Features() {
  return (
    <div className="container my-5">
      <h2
        className="font-bold text-primaryColor mb-4 mobile-center"
        style={{ fontSize: "30px" }}
      >
        Go literally anywhere. <br />
        From anywhere.
      </h2>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mobile-center">
          <h4 className="text-primaryColor font-18 font-bold">Smart</h4>
          <p className="text-muted font-demi mb-3 mt-2 font-16">
            With access to millions of journeys, you can quickly find people
            nearby travelling your way.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mobile-center">
          <h4 className="text-primaryColor font-18 font-bold">Simple</h4>
          <p className="text-muted font-demi mb-3 mt-2 font-16">
            Enter your exact address to find the perfect ride. Choose who you’d
            like to travel with. And book!
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mobile-center">
          <h4 className="text-primaryColor font-18 font-bold">Seamless</h4>
          <p className="text-muted font-demi mb-3 mt-2 font-16">
            Get to your exact destination, without the hassle. No queues. No
            waiting around.
          </p>
        </div>
      </div>
      <h2
        className="font-bold text-primaryColor mb-4 mt-5 mobile-center"
        style={{ fontSize: "30px" }}
      >
        3 things you'll love about BlaBlaCar
      </h2>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mobile-center">
          <i className="text-primaryColor fas fa-map-signs fa-3x mb-2"></i>
          <h4 className="text-primaryColor font-18 font-bold">Choice</h4>
          <p className="text-muted font-demi mb-3 mt-2 font-16">
            We go everywhere. Literally thousands of destinations. No station
            required.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mobile-center">
          <i className="text-primaryColor fas fa-car fa-3x mb-2"></i>
          <h4 className="text-primaryColor font-18 font-bold">
            Carpool with confidence
          </h4>
          <p className="text-muted font-demi mb-3 mt-2 font-16">
            Government ID verification adds another level of security to member
            profiles.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mobile-center">
          <i className="text-primaryColor fas fa-map-marker-alt fa-3x mb-2"></i>
          <h4 className="text-primaryColor font-18 font-bold">
            Get going faster
          </h4>
          <p className="text-muted font-demi mb-3 mt-2 font-16">
            No need to travel across town, catch a ride leaving near you. .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
