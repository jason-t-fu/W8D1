import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => {
  return (<Route path={path} render={(props) => {
    return !loggedIn? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  }} /> )
};

const Protected = ({ component: Component, path, loggedIn }) => {
  return (<Route path={path} render={(props) => {
    return loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  }} /> )
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

export const AuthRoute = withRouter(connect(
  mapStateToProps, null)(Auth))
export const Protectedroute = withRouter(connect(
  mapStateToProps, null)(Protected))