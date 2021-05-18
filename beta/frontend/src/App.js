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
import Forgot from "./components/Shared/Forgot/Forgot";
import Change from "./components/Shared/Change-Password/Change";
import ForgotOTP from "./components/Shared/Forgot-OTP/OTP";

//Auth Guard Import 
import AdminGuard from "./components/Guards/AdminGuard";
import ClientGuard from "./components/Guards/ClientGuard";
import DriverGuard from "./components/Guards/DriverGuard";
import AuthGuard from "./components/Guards/AuthGuard";
import EmailGuardedRoute from "./components/Guards/EmailGuard";
import IdGuardedRoute from "./components/Guards/IdGuard";
import NumberGuardedRoute from "./components/Guards/OtpGuard";
import HomeGuard from './components/Guards/HomeGuard';

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
import UserProfile from "./components/Client/Client-UserProfile/UserProfile";
import Confirm from "./components/Client/Client-Confirm/Confirm";

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
import DriverUserProfile from "./components/Driver/Driver-UserProfile/UserProfile";

//Admin Imports
// import Dashboard from "./components/Admin/Dashboard/Dashboard";
import AdminRides from "./components/Admin/Admin-Rides/AllRides";
import OngoingRides from "./components/Admin/Ongoing-Rides/Ongoing";
import RideDetails from "./components/Admin/Admin-Ride-Details/RideDetails";
import AdminUsers from "./components/Admin/User/User";
import UserDetails from "./components/Admin/User/User-Details/Details";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        {/* Home */}
        <HomeGuard exact path="/" component={ClientHome} />

        {/* Login */}
        <AuthGuard exact path="/login" component={Login} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/change" component={Change} />
        <Route exact path="/forgot-otp" component={ForgotOTP} />

        {/* User Profile */}
        

        {/*  Client */}
        <AuthGuard exact path="/client/signup" component={ClientSignup} />
        <NumberGuardedRoute exact path="/client/otp" component={ClientOtp} />
        <EmailGuardedRoute exact path="/client/email" component={ClientEmail} />
        <IdGuardedRoute exact path="/client/verify" component={ClientVerify} />
        <Route exact path="/client/contact" component={ClientContact} />
        <ClientGuard exact path="/client/myride" component={ClientMyRide} />
        <ClientGuard exact path="/client/ride" component={ClientRide} />
        <ClientGuard path="/client/reserve" component={ClientReserve} />
        <ClientGuard path="/client/confirm" component={Confirm} />
        <Route exact path="/client/userprofile" component={UserProfile} />

        {/* Driver */}
        <DriverGuard exact path="/driver/home" component={DriverHome} />
        <AuthGuard exact path="/driver/signup" component={DriverSignup} />
        <NumberGuardedRoute exact path="/driver/otp" component={DriverOtp} />
        <EmailGuardedRoute exact path="/driver/email" component={DriverEmail} />
        <IdGuardedRoute exact path="/driver/verify" component={DriverVerify} />
        <Route
          exact
          path="/driver/add-vehicle"
          component={DriverAddVehicle}
        />
        <DriverGuard exact path="/driver/add-ride" component={DriverAddRide} />
        <DriverGuard
          exact
          path="/driver/ride-details"
          component={DriverRideDetails}
        />
        <DriverGuard exact path="/driver/all-ride" component={DriverAllRides} />
        <DriverGuard exact path="/driver/userProfile" component={DriverUserProfile}/>


        {/* Admin */}
        <AdminGuard exact path="/admin/all-rides" component={AdminRides} />
        <AdminGuard
          exact
          path="/admin/ongoing-rides"
          component={OngoingRides}
        />
        <AdminGuard exact path="/admin/ride-details" component={RideDetails} />
        <AdminGuard exact path="/admin/users" component={AdminUsers} />
        <AdminGuard exact path="/admin/users/:id" component={UserDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
