import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isEmailVerified } from "../../redux/actions/auth";

const EmailGuardedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isEmailVerified() === 'false'
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default EmailGuardedRoute;