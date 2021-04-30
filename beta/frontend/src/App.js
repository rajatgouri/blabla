import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

//Shared Imports
import Login from "./components/Shared/Login/Login";
import NavbarComponent from './components/Shared/Navbar/NavbarComponent';
import Footer from "./components/Shared/Footer/Footer";

//Client Imports
import ClientEmail from "./components/Client/Client-Signup/Email";
import ClientHome from "./components/Client/Client-Home/Home";
import ClientRide from "./components/Client/Client-Ride/Ride";
import ClientReserve from "./components/Client/Client-Reserve/Reserve";
import ClientContact from "./components/Client/Client-Contact/Contact";
import ClientOtp from "./components/Client/Client-Signup/Otp";
import ClientSignup from "./components/Client/Client-Signup/Signup";
import ClientMyRide from "./components/Client/Client-MyRide/MyRide";
import ClientVerify from './components/Client/Client-Signup/Client-Verify/Verify';

//Driver Imports
import DriverSignup from "./components/Driver/Driver-Signup/Signup";
import DriverOtp from "./components/Driver/Driver-Signup/Otp";
import DriverEmail from "./components/Driver/Driver-Signup/Email";
import DriverVerify from './components/Driver/Driver-Signup/Driver-Verify/Verify';
import DriverAddVehicle from './components/Driver/Driver-Signup/AddVehicle';
import DriverAddRide from './components/Driver/Add-Ride/Add-Ride';
import DriverHome from './components/Driver/Driver-Home/Home';
import DriverRideDetails from './components/Driver/Driver-Ride-Details/RideDetails';
import DriverAllRides from './components/Driver/All-Rides/AllRides';

//Admin Imports
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import AdminRides from "./components/Admin/Admin-Rides/AllRides";
import OngoingRides from "./components/Admin/Ongoing-Rides/Ongoing";
import RideDetails from "./components/Admin/Admin-Ride-Details/RideDetails";
import AdminUsers from "./components/Admin/User/User";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        {/* Home */}
        <Route exact path="/" component={ClientHome} />

        {/* Login */}
        <Route exact path="/login" component={Login} />

        {/*  Client Sign up */}
        <Route exact path="/client/signup" component={ClientSignup} />
        <Route exact path="/client/otp" component={ClientOtp} />
        <Route exact path="/client/email" component={ClientEmail} />
        <Route exact path="/client/verify" component={ClientVerify} />

        {/* Driver Sign up */}
        <Route exact path="/driver/home" component={DriverHome} />
        <Route exact path="/driver/signup" component={DriverSignup} />
        <Route exact path="/driver/otp" component={DriverOtp} />
        <Route exact path="/driver/email" component={DriverEmail} />
        <Route exact path="/driver/verify" component={DriverVerify} />
        <Route exact path="/driver/add-vehicle" component={DriverAddVehicle} />
        <Route exact path="/driver/add-ride" component={DriverAddRide} />
        <Route exact path="/driver/ride-details" component={DriverRideDetails} />
        <Route exact path="/driver/all-ride" component={DriverAllRides} />

        {/* Admin */ }
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/all-rides" component={AdminRides} />
        <Route exact path="/admin/ongoing-rides" component={OngoingRides} />
        <Route exact path="/admin/ride-details" component={RideDetails} />
        <Route exact path="/admin/users" component={AdminUsers} />

        {/* Contact */}
        <Route exact path="/client/contact" component={ClientContact} />

        {/* Ride */}
        <Route exact path="/client/ride" component={ClientRide} />

         {/* My Ride */}
         <Route exact path="/client/myride" component={ClientMyRide} />

        {/* Reserve */}
        <Route path="/client/reserve" component={ClientReserve} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
