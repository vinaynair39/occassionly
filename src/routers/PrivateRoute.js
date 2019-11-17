import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import jwtDecode from 'jwt-decode';
export const PrivateRoute = ({
  login,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return(
      <Route {...rest} component={(props) => (
      (isAuthenticated === true) ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
      )} />
  )
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps)(PrivateRoute);
