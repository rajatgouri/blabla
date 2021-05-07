import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userRole } from "../../redux/actions/auth";

const DriverGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated();
    const role = userRole();
    return (
        <Route {...rest} render={(props) => (
            auth === true && role === 'driver'
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default DriverGuardedRoute;