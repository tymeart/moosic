import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route {...rest} render={props =>
    props.loggedIn === true ?
      <Component {...props} {...rest} /> :
      <Redirect to="/login" />
    }
  />
);

const mapStateToProps = ( state, ownProps ) => {
  return {
    loggedIn: state.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps, null, null, { pure: false })(PrivateRoute));
