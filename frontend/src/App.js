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
import Loginhome from "./components/auth/Login/Loginhome";
import LoginNumber from "./components/auth/Login/LoginNumber";
import Contact from "./components/auth/Signup/Contact";
import Home from "./components/home/Home";

function App() {
  const pathname = window.location.pathname;
  return (    
    <div className="App">     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Loginhome} />
        <Route path="/login/email" component={Login} />
        <Route path="/login/number" component={LoginNumber} />

        {/* Sign up */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/email" component={Email} />
        <Route path="/signup/name" component={Name} />
        <Route path="/signup/dob" component={Dob} />
        <Route path="/signup/password" component={Password} />
        <Route path="/signup/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
