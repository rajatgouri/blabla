import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userRole } from "../../redux/actions/auth";

const HomeGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated();
    const role = userRole();
    return (
        <Route {...rest} render={(props) => (
            auth === false
                ? <Component {...props} />
                : role === 'driver'
                    ? <Redirect to='/driver/home' />
                    : role === 'admin'
                        ? <Redirect to='/admin/all-rides' />
                        : <Component {...props} />
        )} />
    )
}

export default HomeGuardedRoute;