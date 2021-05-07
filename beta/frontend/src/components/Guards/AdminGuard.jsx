import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userRole } from "../../redux/actions/auth";

const AdminGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated();
    const role = userRole();
    return (
        <Route {...rest} render={(props) => (
            auth === true && role === 'admin'
                ? <Component {...props} />
                : role === 'driver'
                    ? <Redirect to='/driver/home' />
                    : <Redirect to='/' />
        )} />
    )
}

export default AdminGuardedRoute;