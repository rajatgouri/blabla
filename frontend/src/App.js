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
import Signup from "./components/auth/Signup/Signup";
import Contact from "./components/auth/Signup/Contact";
import Otp from "./components/auth/Signup/Otp";
import Home from "./components/home/Home";
import Ride from "./components/ride/Ride";
import Footer from "./components/footer/Footer";
import Reserve from "./components/reserve/Reserve";

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
        <Route path="/signup/email" component={Email} />
        <Route path="/signup/name" component={Name} />
        <Route path="/signup/dob" component={Dob} />
        <Route path="/signup/password" component={Password} />
        <Route path="/signup/contact" component={Contact} />
        <Route path="/signup/otp" component={Otp} />

        {/* Ride */}
        <Route path="/ride" component={Ride} />

        {/* Reserve */}
        <Route path="/reserve" component={Reserve} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
