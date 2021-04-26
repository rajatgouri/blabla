import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/Navbar/NavbarComponent";
import Email from "./components/auth/Signup/Email";
import Home from "./components/home/Home";
import Ride from "./components/Ride/Ride";
import Footer from "./components/Footer/Footer";
import Reserve from "./components/Reserve/Reserve";
import Contact from "./components/Contact/Contact";

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
