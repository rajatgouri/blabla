import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isIdSubmitted } from "../../redux/actions/auth";

const IdGuardedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isIdSubmitted() === 'false'
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default IdGuardedRoute;