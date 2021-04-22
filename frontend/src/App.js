import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Email from "./components/auth/Signup/Email";
import Name from "./components/auth/Signup/Name";
import Dob from "./components/auth/Signup/Dob";
import Password from "./components/auth/Signup/Password";
import Signup from "./components/auth/Signup/Signup";
import Loginhome from "./components/auth/Login/Loginhome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Loginhome} />
        <Route path="/login/email" component={Login} />

        {/* Sign up */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/email" component={Email} />
        <Route path="/signup/name" component={Name} />
        <Route path="/signup/dob" component={Dob} />
        <Route path="/signup/password" component={Password} />
      </Switch>
    </div>
  );
}

export default App;
