import React from "react";
import Navbar from "../navbar/NavbarComponent";
import "./home.css";
import { Link } from "react-router-dom";
import Features from "./Features/Features";

function Home() {
  return (
    <>
      <div id="home">
        <Navbar />
        <div className="container">
          <div className="row py-section">
            <div className="col-lg-6 col-md-5 col-sm-12 col-12 mt-5">
              <div className="card px-4">
                <h1 className="text-primaryColor font-bold main-heading">
                  Copywriting <br />
                  simplified.
                </h1>
                <p className="font-demi text-primaryColor home-para">
                  Introducing the end of writer’s block.
                  <br />
                  With CopyAI’s automated creativity tools,
                  <br />
                  you can generate marketing copy in seconds.
                </p>
                <Link to="/login">
                  <div className="mobile-center">
                    <button className="home-button text-white font-demi py-2 px-4">
                      Start your free trial&nbsp;&nbsp;&nbsp;
                      <i className="fas fa-arrow-right text-white"></i>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-12 my-5">
              <div className="card bg-white py-5 px-lg-5 px-3 mx-lg-5 mx-4">
                <h4 className="font-bold font-20 text-primaryColor pl-2 mobile-center">
                  Enter your location and destination
                </h4>
                <div className="input-group mt-5">
                  <input
                    type="password"
                    className="form-control input-bg"
                    placeholder="From"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="password"
                    className="form-control input-bg"
                    placeholder="To"
                  />
                </div>
                <Link to="/login">
                  <div className="pl-2 mt-5">
                    <button className="home-button text-white font-demi py-2 px-4">
                      Create
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}

export default Home;
