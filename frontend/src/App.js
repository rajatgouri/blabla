import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Email from "./components/Auth/Signup/Email";
import Home from "./components/Home/Home";
import Ride from "./components/Ride/Ride";
import Footer from "./components/Footer/Footer";
import Reserve from "./components/Reserve/Reserve";
import Contact from "./components/Contact/Contact";
import Otp from "./components/Auth/Signup/Otp";
import Signup from "./components/Auth/Signup/Signup";
import MyRide from "./components/MyRide/MyRide";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Home} />

        {/* Login */}
        <Route exact path="/login" component={Login} />

        {/* Sign up */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/email" component={Email} />

        {/* Contact */}
        <Route exact path="/contact" component={Contact} />

        {/* Ride */}
        <Route exact path="/ride" component={Ride} />

         {/* My Ride */}
         <Route exact path="/myride" component={MyRide} />

        {/* Reserve */}
        <Route path="/reserve" component={Reserve} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
