import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
  return (
    <Route {...rest} render={props =>
      isLoggedIn === true ?
        <Component {...props} {...rest} /> :
        <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
