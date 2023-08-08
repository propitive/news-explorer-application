import React, { Children, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ currentUser, children, props }) {
  return (
    <Route {...props}>
      {currentUser !== null ? children : <Redirect to="/" />}
    </Route>
  );
}

export default ProtectedRoute;
