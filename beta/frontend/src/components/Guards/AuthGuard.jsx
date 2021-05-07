import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userRole } from "../../redux/actions/auth";

const AuthGuardedRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated();
    const role = userRole();
    return (
        <Route {...rest} render={(props) => (
            auth === false
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default AuthGuardedRoute;