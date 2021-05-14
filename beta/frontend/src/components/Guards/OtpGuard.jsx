import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isNumberVerified } from "../../redux/actions/auth";

const NumberGuardedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isNumberVerified() === 'false'
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default NumberGuardedRoute;