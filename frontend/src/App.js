import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/navbar/NavbarComponent";
import Email from "./components/auth/Signup/Email";
import Name from "./components/auth/Signup/Name";
import Dob from "./components/auth/Signup/Dob";
import Password from "./components/auth/Signup/Password";
import Number from "./components/auth/Signup/Number";
import Otp from "./components/auth/Signup/Otp";
import Home from "./components/home/Home";
import Ride from "./components/ride/Ride";
import Footer from "./components/footer/Footer";
import Reserve from "./components/reserve/Reserve";
import Contact from "./components/contact/Contact";

function App() {
  const pathname = window.location.pathname;
  return (
    <div className="App">
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Home} />

        {/* Login */}
        <Route exact path="/login" component={Login} />

        {/* Sign up */}
        <Route exact path="/signup/email" component={Email} />
        <Route exact path="/signup/name" component={Name} />
        <Route exact path="/signup/dob" component={Dob} />
        <Route exact path="/signup/password" component={Password} />
        <Route exact path="/signup/contact" component={Number} />
        <Route exact path="/signup/otp" component={Otp} />

        {/* Contact */}
        <Route exact path="/contact" component={Contact} />

        {/* Ride */}
        <Route exact path="/ride" component={Ride} />

        {/* Reserve */}
        <Route path="/reserve" component={Reserve} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
