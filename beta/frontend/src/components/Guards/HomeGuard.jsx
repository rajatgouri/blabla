import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userRole , isEmailVerified, isNumberVerified, isIdSubmitted } from "../../redux/actions/auth";

const HomeGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated();
    const role = userRole();
    let redirect ;
    if (isEmailVerified()==='true') {
        if (isNumberVerified()==='true') {
            if (isIdSubmitted()==='true') {
                redirect = '/';
            } else {
                redirect = '/client/verify';
            }
        } else {
            redirect = '/client/otp';
        }
    } else{
        redirect = "/client/email";
    }
    return (
        <Route {...rest} render={(props) => (
            auth === false
                ? <Component {...props} />
                : role === 'driver'
                    ? <Redirect to='/driver/home' />
                    : role === 'admin'
                        ? <Redirect to='/admin/all-rides' />
                        : redirect==='/'?
                            <Component {...props} />
                            : <Redirect to={redirect} />
        )} />
    )
}

export default HomeGuardedRoute;