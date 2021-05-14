import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userRole, isEmailVerified, isNumberVerified, isIdSubmitted  } from "../../redux/actions/auth";

const DriverGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated();
    const role = userRole();
    let redirect ;
    if (isEmailVerified()==='true') {
        if (isNumberVerified()==='true') {
            if (isIdSubmitted()==='true') {
                redirect = '/';
            } else {
                redirect = '/driver/verify';
            }
        } else {
            redirect = '/driver/otp';
        }
    } else{
        redirect = "/driver/email";
    }
    return (
        <Route {...rest} render={(props) => (
            auth === true && role === 'driver' && redirect == '/'
                ? <Component {...props} />
                : <Redirect to={redirect} />
        )} />
    )
}

export default DriverGuardedRoute;